import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch

  return (
    <div className="main-container">
      <h1 className="latest-matches">Latest Matches</h1>
      <div className="latest-match-details-container">
        <div className="latest-match-card">
          <div className="team-details">
            <p className="team-heading">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="venue">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <hr className="hr" />
        <div className="match-info">
          <p className="match-headings">First Innings</p>
          <p className="latest-match-details-value">{firstInnings}</p>
          <p className="match-headings">Second Innings</p>
          <p className="latest-match-details-value">{secondInnings}</p>
          <p className="match-headings">Man Of The Match</p>
          <p className="latest-match-details-value">{manOfTheMatch}</p>
          <p className="match-headings">Umpires</p>
          <p className="latest-match-details-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
