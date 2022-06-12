// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import InfoBoxComponent from "./Infobox.styles";
import { Progress, NullProgress } from "../../types/components/InfoBox/Progress"

const { Container, InfoBoxWidget, DataLabel, DataText, Icon, Content, Progress: ProgressNode, ProgressBar, ProgressDescription } = InfoBoxComponent;



const InfoBox = ({bgClass, iconClass, iconBGClass, dataLabel, dataText, progress})=> {
  console.log(progress);
  const progressComponent = progress.enabled ? 
    (
    <>
      <ProgressNode>
        <ProgressBar value={progress.percent}></ProgressBar>
      </ProgressNode>
      <ProgressDescription>{progress.description}</ProgressDescription>
    </>
    ) : <></>

  return (
    <Container>
      <InfoBoxWidget className={bgClass}>
          <Icon className={iconBGClass}><i className={iconClass}></i></Icon>
          <Content>
            <DataLabel>{dataLabel}</DataLabel>
            <DataText>{dataText}</DataText>
            {progressComponent}
          </Content>
      </InfoBoxWidget>
    </Container>
  );
}

InfoBox.defaultProps = {
  bgClass: "bg-light",
  iconClass: "bi bi-emoji-smile-fill",
  iconBGClass: "bg-primary",
  dataLabel: "InfoBox Label",
  dataText: "0.00",
  progress: new NullProgress()
};

InfoBox.propTypes = {
  bgClass: PropTypes.string,
  iconClass: PropTypes.string,
  iconBGClass: PropTypes.oneOf(["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark", "bg-white","bg-light"]),
  dataLabel: PropTypes.string,
  dataText: PropTypes.string,
  progress: PropTypes.oneOf(NullProgress, Progress)
}

export default InfoBox;

