import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchesList: [], isLoader: true}

  componentDidMount() {
    this.getMatches()
  }

  renderFormattedtMatchDetails = data => ({
    id: data.id,
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    const updatedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatch: this.renderFormattedtMatchDetails(
        fetchedData.latest_match_details,
      ),
      recentMatches: fetchedData.recent_matches.map(recentMatch =>
        this.renderFormattedtMatchDetails(recentMatch),
      ),
    }
    this.setState({matchesList: updatedData, isLoader: false})
  }

  getTeamClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {matchesList, isLoader} = this.state
    const {recentMatches} = matchesList
    const classNames = `match-container ${this.getTeamClassName()}`
    return (
      <div className={classNames}>
        {isLoader ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              src={matchesList.teamBannerUrl}
              alt="team banner"
              className="banner-img"
            />
            <LatestMatch latestMatch={matchesList.latestMatch} />
            <ul className="list">
              {recentMatches.map(eachMatchCard => (
                <MatchCard matchesListDetails={eachMatchCard} key={eachMatchCard.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
