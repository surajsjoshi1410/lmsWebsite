import styled from "styled-components";
import {theme, media} from "../../../../style/theme/theme";


export const DailyScheduleContainerWrap = styled.div`
display : flex;
flex-direction: column;
padding: 20px;
width: 60%;
border-radius: 10px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

.daily-schedule-header{
 font-size: 16px;
 margin-bottom: 10px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.cadet};
}

background-color: ${theme.colors.seasalt};
/* Custom styles for FullCalendar buttons */
.fc {
width: 100%;


}
.fc-button {
  background-color:${theme.colors.pink3}; /* Change background color of all buttons */
  color: Black; /* Text color for all buttons */
  border-radius: 10px; /* Rounded corners for buttons */
  padding: 10px 20px 10px 20px; /* Increase padding */
  font-weight: 600; /* Make text bold */
  font-size: 12px!important;
  margin: 5px;
  border: none;
  outline: none!important;
}
.fc .fc-button-primary:not(:disabled).fc-button-active, .fc .fc-button-primary:not(:disabled):active {
    background-color:${theme.colors.pink4};
    border-color:transparent;
    color: white;
    border: none;
    outline: none!important;  
}
.fc-button-active {
    opacity: 0.8; /* Change opacity on hover for all buttons */
      background-color: #ff5722!importatnt;
  }
.fc-today-button{
background-color:${theme.colors.pink3}!important;
color: white;

}


.fc-button.fc-today-button {
  color: black; /* Text color for 'Today' button */
  margin-left: 100px;
}

.fc-button:hover {
  opacity: 0.8; /* Change opacity on hover for all buttons */
}

.fc-button:focus {
  outline: none!important; /* Remove outline for all buttons when focused */
}

/* Hide the title in the header */
.fc-header-toolbar .fc-center {
 visibility: hidden;
 display: none!important;
}

`