import "../css/RepoList.css";
import Repo from "../main/Repo";

const RepoList = ({ repos }) => {
  return (
    <div className="repo-list">
      {repos.map((repo) => {
        return <Repo repo={repo} key={repo.id} />;
      })}
    </div>
  );
};

export default RepoList;
