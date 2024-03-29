import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr"

// Connects to data-controller="datepicker"
export default class extends Controller {
  static targets = [
    "start",
    "end"
  ]
  connect() {
    flatpickr(this.startTarget)
    flatpickr(this.endTarget)
  }
}
