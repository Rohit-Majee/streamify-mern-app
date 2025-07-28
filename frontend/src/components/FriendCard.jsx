import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants/constant";

const FriendCard = ({ friend }) => {
  function getLanguageFlag(language) {
    if (!language) return null;

    const langLower = language.toLowerCase();
    const countryCode = LANGUAGE_TO_FLAG[langLower];

    if (countryCode) {
      return (
        <img
          src={`https://flagcdn.com/24x18/${countryCode}.png`}
          alt={`${langLower} flag`}
          className="h-3 mr-1 inline-block"
        />
      );
    }
    return null;
  }

  return (
    <div className="card bg-base-100 border border-base-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="card-body p-5">
        {/* USER INFO */}
        <div className="flex items-center gap-3 mb-4">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={friend.profilePic} alt={friend.fullName} />
            </div>
          </div>
          <h3 className="font-semibold truncate text-base">
            {friend.fullName}
          </h3>
        </div>

        {/* Languages */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="badge badge-secondary badge-sm">
            {getLanguageFlag(friend.nativeLanguage)}
            Native: {friend.nativeLanguage}
          </span>
          <span className="badge badge-outline badge-sm">
            {getLanguageFlag(friend.learningLanguage)}
            Learning: {friend.learningLanguage}
          </span>
        </div>

        {/* Action Button */}
        <Link
          to={`/chat/${friend._id}`}
          className="btn btn-primary btn-sm w-full transition-transform duration-200 hover:scale-105"
        >
          Message
        </Link>
      </div>
    </div>
  );
};

export default FriendCard;
