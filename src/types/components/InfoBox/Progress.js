
export class Progress {
  /**
   * @param {Boolean} enabled
   * @param {Number} percent
   * @param {String} description
  */
  constructor(enabled, percent, description) {
    this.enabled = enabled;
    this.percent = percent;
    this.description = description;
  }
}

export class NullProgress extends Progress {
  constructor() {
    super(false, 50, "");
    this.description = `${this.percent}% has been completed.`
  }
}
