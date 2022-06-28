import styled from "styled-components"
import boxShadows from "../../assets/themes/base/boxShadows";
import boxShadow from "../../assets/themes/functions/boxShadow";
import colors from "../../assets/themes/base/colors";

/**
 * 20220613: 
 *  to be able to override css from bootstrap, i have to use a styled Container and override css from there.
 *  i was having problemes with the selector but for now, this works 
 *      ( direct .class will not respect the child parent relationship so I am not sure about that behavior)
 */
const Container = styled.div`
    .bg-primary, .bg-secondary, .bg-success, .bg-danger, .bg-warning, .bg-info, .bg-dark{
        > *{
            color: ${colors.white.main}
        }
    };
    .bg-light, .bg-white{
        > *{
            color: ${colors.black.main};
        }
    };
    
`
const InfoBoxWidget = styled.div`
    box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
    border-radius: 0.25rem;
    background-color: ${colors.white.main};
    display: flex;
    margin-bottom: 1rem;
    min-height: 80px;
    padding: 0.5rem;
    position: relative;
    width: 100%;
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

const Progress = styled.div`
    background-color: rgba(0,0,0,.125);
    height: 2px;
    margin: 5px 0;
    
`;

const ProgressBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: ${colors.white.main};
    text-align: center;
    white-space: nowrap;
    background-color: ${colors.success.main};
    transition: width .6s ease;
    
    height:inherit;
    width: ${props => `${props.value}%`}
`;

const ProgressDescription = styled.span`
    font-size: 1rem;
    display: block;
    white-space: nowrap;
    text-overflow:ellipsis;
`


/**
 * Exports
 */
const Component = {
    Container: Container,
    InfoBoxWidget: InfoBoxWidget,
    Icon: Icon,
    Content: Content,
    DataLabel: DataLabel,
    DataText: DataText,
    
    Progress: Progress,
    ProgressBar: ProgressBar,
    ProgressDescription: ProgressDescription
}

export default Component


