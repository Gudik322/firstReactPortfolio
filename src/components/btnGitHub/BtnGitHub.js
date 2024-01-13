import "./style.css"
import imgGit from "./gitHub-black.svg"

const BtnGitHub = ({link}) => {
    return (
        <a href={link} rel="noreferrer" target="_blank" className="btn-outline">
                    <img src={imgGit} alt=""/>
                    GitHub repo
        </a>
      );
}
 
export default BtnGitHub;