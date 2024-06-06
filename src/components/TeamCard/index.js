import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {details} = this.props
    const {competing_team, competing_team_logo, match_status, result} = details
    return (
      <li>
        <img src={competing_team_logo} alt={`competing team ${competing_team}`} width="40px" />
        <p>{competing_team}</p>
        <p>{result}</p>
        <p className="status">{match_status}</p>
      </li>
    )
  }
}
export default TeamCard
