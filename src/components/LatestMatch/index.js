import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class LatestMatch extends Component {
  state = {
    LatestMathDetails: [],
    imgeUrl: '',
    recentMatches: [],
    isLoading: true,
  }
  componentDidMount() {
    this.getMatch()
  }
  getMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {name} = params
    const resul = await fetch(`https://apis.ccbp.in/ipl/${name}`)
    const data = await resul.json()
    console.log(data)
    const result = data.latest_match_details
    this.setState({
      LatestMathDetails: result,
      imgeUrl: data.team_banner_url,
      recentMatches: data.recent_matches,
      isLoading: false,
    })
  }
  render() {
    const {match} = this.props
    const {params} = match
    const {name} = params
    const {LatestMathDetails, imgeUrl, recentMatches, isLoading} = this.state
    const {competing_team, competing_team_logo, venue, date, result} =
      LatestMathDetails
    console.log(imgeUrl)
    return (
      <div>
        {isLoading ? (
          <div className="load" data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="lates">
            <img
              src={imgeUrl}
              alt="team banner"
              width="100%"
              className="team_banner"
            />
            <h1 className="lm">Latest Matches</h1>
            <div className="card">
              <div className="latest_match">
                <div>
                  <p>{competing_team}</p>
                  <p>{date}</p>
                  <p>{venue}</p>
                  <p>{result}</p>
                </div>
                <img
                  src={competing_team_logo}
                  alt={`latest match ${competing_team}`}
                  width="70px"
                />
              </div>
              <hr />
              <div>
                <p>First Innings</p>
                <p>{LatestMathDetails.first_innings}</p>
                <p>Second Innings</p>
                <p>{LatestMathDetails.second_innings}</p>
                <p>Man Of The Match</p>
                <p>{LatestMathDetails.man_of_the_match}</p>
                <p>Umpire</p>
                <p>{LatestMathDetails.umpires}</p>
              </div>
            </div>
            <ul>
              {recentMatches.map(each => (
                <TeamCard details={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default LatestMatch
