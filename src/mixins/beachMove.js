export default {
  data() {
    return {
      offset: 0,
      isActive: '',
      isDragging: false,
      beachWidthdth: (400 + 64), // (width of div + padding), default
      beforeMiddle: [],
      afterMiddle: [],
      startDragPosition: null,
      endDragPosition: null,
    };
  },
  props: ['state'],
  mounted() {
    // sometimes on small screens we are less than the default 400px width
    this.beachWidthdth = (document.querySelector('.beach').offsetWidth + 64);

    window.addEventListener('resize', () => {
      this.beachWidthdth = (document.querySelector('.beach').offsetWidth + 64);
    });
  },
  computed: {
    /**
     * Calculate how far the user has dragged. We use this value
     * to css translate beaches. If the user is actively dragging
     * we give an exact number, but as soon as the drag stops we round
     * to the nearest 'beach' and the CSS animation takes care of the rest
    */
    dragDifference() {
      if (this.isDragging) {
        if (this.endDragPosition !== null) {
          return this.offset + (this.startDragPosition - this.endDragPosition);
        }
        return this.offset + this.startDragPosition;
      }
      return (Math.round((this.offset) / (this.beachWidthdth)) * this.beachWidthdth);
    },
  },
  methods: {
    /**
     * Start a drag. Variable instantiantons speak for themselves
     * If the user clicks on a button, ignore the startDrag event completely since we have a
     * click event that we want to take precedence
    */
    startDrag(event) {
      if (!event.target.id.includes('button')) {
        this.isDragging = true;
        // handle touch events
        this.setDragPosition(event, 'start');
      }
    },
    /**
     * Stop a drag
     * find which list item is closest to the center of the screen after the drag
     * and set it to active
     * Calling setDragPosition handles touch or click events
     * If we are dragging and leaving the document do the same thing as a normal
     * drag: todo: remove DRY code
     * @param {string} isDocument - if the listener is on the document, default false
    */
    stopDrag(event, isDocument) {
      if (isDocument) {
        if (this.isDragging) {
          this.isDragging = false;
          this.offset += (this.startDragPosition - this.endDragPosition);
          this.preventBeachOverflow();
        }
      } else {
        this.setDragPosition(event, 'drag');
        this.isDragging = false;
        this.offset += (this.startDragPosition - this.endDragPosition);
        this.preventBeachOverflow();
      }
    },
    /**
     * On a mouse move, all we want to do is update the current drag position
     * Calling setDragPosition handles touch or click events
    */
    onDrag(event) {
      event.preventDefault();
      this.endDragPosition = event.pageX;
      this.setDragPosition(event, 'drag');
    },
    /**
     * keeps user from scrolling past beaches on the right and left sides
     * checks the start/end drag position and returns the floor/ceiling to
     * create faster swipes
    */
    preventBeachOverflow() {
      if (this.offset < 0) {
        this.offset = 0;
      }

      if ((this.startDragPosition - this.endDragPosition) > 50) {
        this.offset = (Math.ceil((this.offset) / (this.beachWidthdth)) * this.beachWidthdth);
      } else {
        this.offset = (Math.floor((this.offset) / (this.beachWidthdth)) * this.beachWidthdth);
      }
      const beachLength = document.querySelectorAll('.beach').length;
      if ((this.offset / this.beachWidthdth) + 1 > beachLength) {
        this.offset = (beachLength - 1) * (this.beachWidthdth);
      }
    },

    /**
     * Sets the drag position when touching or grabbing the beaches. If changedTouches
     * exists, call pageX differently that we would on a click
     * @param {string} type - the event type, either start or drag
    */
    setDragPosition(event, type) {
      if (event.changedTouches && event.changedTouches.length) {
        if (type === 'start') {
          this.endDragPosition = event.changedTouches[0].pageX;
          this.startDragPosition = event.changedTouches[0].pageX;
        } else if (type === 'drag') {
          for (let i = 0; i < event.changedTouches.length; i += 1) {
            this.endDragPosition = event.changedTouches[i].pageX;
          }
        }
      } else if (type === 'start') {
        this.endDragPosition = event.pageX;
        this.startDragPosition = event.pageX;
      } else if (type === 'drag') {
        this.endDragPosition = event.pageX;
      }
    },
  },
};
