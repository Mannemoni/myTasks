import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'HEALTH',
    capitalDisplayText: 'Health',
  },
  {
    id: 'EDUCATION',
    capitalDisplayText: 'Education',
  },
  {
    id: 'ENTERTAINMENT',
    capitalDisplayText: 'Entertainment',
  },
  {
    id: 'SPORTS',
    capitalDisplayText: 'Sports',
  },
  {
    id: 'TRAVEL',
    capitalDisplayText: 'Travel',
  },
  {
    id: 'OTHERS',
    capitalDisplayText: 'Others',
  },
]

class Capitals extends Component {
  state = {
    nameInput: '',
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )

    return activeCountryAndCapital.country
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput} = this.state
  }

  render() {
    const {activeCapitalId, nameInput} = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Create a task!</h1>
          <div className="question-container">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="form-description">Task</p>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />

              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
            <h1>Tags</h1>
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
