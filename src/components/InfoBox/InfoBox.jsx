// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import InfoBoxComponent from "./Infobox.styles";

const { InfoBoxWidget, DataLabel, DataText, Icon, Content } = InfoBoxComponent;

const InfoBox = ({iconClass, iconBGClass, dataLabel, dataText})=> {
  return (
    <InfoBoxWidget>
        <Icon className={iconBGClass}><i className={iconClass}></i></Icon>
        <Content>
          <DataLabel>{dataLabel}</DataLabel>
          <DataText>{dataText}</DataText>
        </Content>
    </InfoBoxWidget>
  );
}

InfoBox.defaultProps = {
  iconClass: "bi bi-emoji-smile-fill",
  iconBGClass: "bg-primary",
  dataLabel: "InfoBox Label",
  dataText: "0.00",
};

InfoBox.propTypes = {
  iconClass: PropTypes.string,
  iconBGClass: PropTypes.oneOf(["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark", "bg-white","bg-light"]),
  dataLabel: PropTypes.string,
  dataText: PropTypes.string,
}

export default InfoBox;

