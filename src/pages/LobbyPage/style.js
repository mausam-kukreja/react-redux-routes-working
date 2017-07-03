import styled from 'styled-components';

const styles = {};
styles.usersContainer = styled.div`
 display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;  
  align-items: left;
  flex-flow: row wrap;
  font-weight: normal;
`;
styles.userData=styled.div`
 flex: 1  ;

padding:5px;


`;
export default styles;