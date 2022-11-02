
import { Box, Stack, Typography } from "@mui/material";
import coding from "../../assets/icons/coding.png";
import webinar from "../../assets/icons/webinar3.png";
import hackathon from "../../assets/icons/hackathon.png";
import "./Events.css";
import EastIcon from "@mui/icons-material/East";

const Events = () => {  

  const events = [
    {
      Category: "codingcontest",
      Date: "04/11/2022",
      count: "0",
      desc: "CODEX FIESTA is a coding contest will be held on 4th of November, 2022 8pm to 10pm IST, where you can complete with others.",
    },
    // {
    //   Category: "hackathon",
    //   Date: "20/11/2022",
    //   count: "1",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
    // },
    // {
    //   Category: "webinar",
    //   Date: "20/12/2022",
    //   count: "2",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
    // },
    // {
    //   Category: "webinar",
    //   Date: "20/12/2022",
    //   count: "2",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
    // },
  ];
  let len = events.length;
  if (len > 3) len = 3;
  let item = 0;

  return (
    <Box
      id="event" className="upcoming_event" marginBottom={{ xs: '3rem', sm: '3rem', md: '3.5rem', lg: '5rem' }} sx={{ display: "flex", flexDirection: "column", alignItems: "center" ,justifyContent:'center', marginBottom:{ xs: '3rem', sm: '1.5rem', md: '2rem', lg: '3.5rem' }}}
    >
      <Box class="title" >
      <Typography variant='h2'  display='flex' textAlign='center' justifyContent='center' width='100%' color='#323232' 
      marginBottom={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' }} fontSize={{ xs: '2.5rem', sm: '3rem', md: '4rem' }} >UPCOMING EVENTS</Typography>
      </Box>
      <Box
        className="Event_container"
        
      >
        <Stack direction="column" spacing={{xs:6 , sm:5 ,md:1}}>
          {events.slice(0, 3).map((element) => {
            {
              len === 0 ? <div className="no-events"></div> : (item = item + 1);

              return (
                <>

                  {item % 2 !== 0 ? (
                    <Stack
                    
                      direction={{
                        xs: "column",
                        sm: "column",
                        md: "row",
                        xl: "row",
                      }}
                      className="event-container"
                    >
                      
                      <Box className="image-container" sx={{marginLeft:{ xs: -20, sm: -8, md: 0 }}}>
                         
                        <img
                          className="event-icon-left"
                        
                          key={
                            element.Category === "webinar"
                              ? "webinar"
                              : element.Category === "codingcontest"
                              ? "coding"
                              : "hackathon"
                          }
                          src={
                            element.Category === "webinar"
                              ? webinar
                              : element.Category === "codingcontest"
                              ? coding
                              : hackathon
                          }
                          alt="..."
                        />
                      </Box>
                      <Box
                        className="event-desc-left"
                        sx={{
                          width: { xs: 250, sm: 350, md: 250 },
                          marginLeft: { xs: 0, sm: 6, md: 1.5 },
                          marginRight: { xs: 0, sm: 0, md: 0 },
                          marginTop: { xs: -0.5, sm: -0.5, md: 1.2 },
                          textAlign: { xs: "center", sm: "center", md: "left" },
                        }}
                      >
                        {element.desc}
                      </Box>
                    </Stack>
                  ) : (
                    <Stack
                      direction={{
                        xs: "column",
                        sm: "column",
                        md: "row",
                        xl: "row",
                      }}
                      className="event-container"
                      sx={{}}
                    >
                      <Box
                        className="event-desc-right"
                        sx={{
                          width: { xs: 250, sm: 350, md: 250 },
                          marginRight: { xs: 0, sm: 0, md: -2 },
                          marginLeft: { xs: 0, sm: 6, md: -4},
                          marginTop: { xs: 8, sm: 8, md: 1.5 },
                          textAlign: {
                            xs: "center",
                            sm: "center",
                            md: "right",
                          },
                        }}
                      >
                        {element.desc}
                      </Box>
                      <Box
                        className="image-container"
                        sx={{
                          marginLeft: { xs: 9, sm: 21, md: 3.8 },
                          marginTop: { xs: -21, sm: -21, md: 0 },
                          marginBottom: { xs: 4, sm: 3, md: 0 },
                        
                        }}
                      >
                        <img
                          className="event-icon-right"
                          key={
                            element.Category === "webinar"
                              ? "webinar"
                              : element.Category === "codingcontest"
                              ? "coding"
                              : "hackathon"
                          }
                          src={
                            element.Category === "webinar"
                              ? webinar
                              : element.Category === "codingcontest"
                              ? coding
                              : hackathon
                          }
                          alt="..."
                        />
                      </Box>
                    </Stack>
                  )}
                </>
              );
            }
          })}
        </Stack>
        {/* <Box className="Know-more" textAlign="center" sx={{ marginTop:{ xs: '1.5rem', sm: '0.5rem', md: '1.5rem', lg: '1.5rem' },marginLeft:{xs:0,sm:5,md:0}}}>
          <Typography variant='h6' className="know_text" sx={{'&:hover': {cursor: 'pointer',}}}>Know more <EastIcon className="arrow-icon" /></Typography>          
        </Box> */}
      </Box>
    </Box>
  );
};

export default Events;
