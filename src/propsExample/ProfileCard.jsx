import PropTypes from 'prop-types';

// ## ✅ Example: ProfileCard with PropTypes
function ProfileCard({name,age,occupation,skills,isMember,bio,onSkillClick}) {
    // Destructuring the props to get the values we need.
    return(
        <div className="profile-card">
            <h1>{name}</h1>
            <h2>{age}</h2>        
            <h2>{occupation}</h2>
            <h3>Skills</h3>
            <ul>
                 {/* passing the onSkillClick function and call it with the specific skill.  */}
                {skills.map((skill,index)=>
                <li key={index} onClick={()=>onSkillClick(skill)}>{skill}</li>)}
            </ul>
            <h3>{isMember ? "Member" : "Non-Member"}</h3>
            <h2>{bio}</h2>
        </div>
    );
}
 ProfileCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  occupation: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
  isMember: PropTypes.bool.isRequired,
  bio: PropTypes.string,
  onSkillClick: PropTypes.func
};
export default ProfileCard