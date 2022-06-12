import styled from "styled-components"
import boxShadows from "../../assets/themes/base/boxShadows";
import boxShadow from "../../assets/themes/functions/boxShadow";

const InfoBoxWidget = styled.div`
    box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
    border-radius: 0.25rem;
    background-color: #fff;
    display: flex;
    margin-bottom: 1rem;
    min-height: 80px;
    padding: 0.5rem;
    position: relative;
    width: 100%;

    /**Overrides */
    > .bg-primary, .bg-secondary, .bg-success, .bg-danger, .bg-warning, .bg-info, .bg-dark {
        i{
            color: #ffffff;
        }
    };
    >.bg-light, .bg-white{
        i{
            color: #000000;
        }
    };
`;


const Icon = styled.span`
    border-radius: 0.25rem;
    align-items: center;
    display: flex;
    font-size: 1.875rem;
    justify-content: center;
    text-align: center;
    width: 70px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.8;
    flex: 1;
    padding: 0 10px;
    overflow: hidden;
`;

const DataLabel = styled.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const DataText = styled.span`
    display: block;
    margin-top: 0.25rem;
    font-weight: 700;
`;
const Component = {
    InfoBoxWidget: InfoBoxWidget,
    Icon: Icon,
    Content: Content,
    DataLabel: DataLabel,
    DataText: DataText
}

export default Component


