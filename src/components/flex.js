import styled from 'styled-components'
import { space, flexDirection } from 'styled-system'

const Flex = styled.div`
    display: flex;
    ${p => p.width && `width: ${p.width}`};
    flex-direction: ${p => (p.direction ? p.direction : 'row')};
    flex-wrap: ${p => (p.wrap ? p.wrap : 'nowrap')};
    justify-content: ${p => (p.justify ? p.justify : 'flex-start')};
    align-items: ${p => (p.align ? p.align : 'flex-start')};
    align-content: ${p => (p.content ? p.content : 'flex-start')};
    ${space};
    ${flexDirection};
`;

export default Flex