import styled from "styled-components";

function ContentContainer({ content }) {
    return (
        <OuterContainer>
            <InnerContainer>
                {content}
            </InnerContainer>
        </OuterContainer>
    )
}

export default ContentContainer;

const OuterContainer = styled.div`
    display: flex;
    justify-content: center;
`

const InnerContainer = styled.div`
    border: 1px solid #AAAAAA;
    width: 100%;
    min-height: 700px;
    max-width: 500px;
`