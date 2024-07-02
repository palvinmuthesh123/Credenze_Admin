import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    TextField,
    Rating,
    Chip,
    IconButton,
    Card,
    CardContent,
    Paper,
    List,
    ListItem,
    ListItemText,
    CardActions,
    Avatar,
    CardMedia,
    Divider,
    LinearProgress,
    Tab,
    Tabs,
    Checkbox,
    Accordion,
    AccordionDetails,
    AccordionSummary
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import YourOrder from '../../components/yourOrder/yourOrder';
import DetailPageSide from '../../components/detailPageSideBar/detailPageSide';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import StarIcon from '@mui/icons-material/Star';
import Header from '../../components/header/header';
import './ProductDetail.css'
import { makeStyles } from '@mui/styles';
import Footer from '../../components/footer/footer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const useStyles = makeStyles({
    mainPart: {
        // paddingHorizontal: WIDTH / 100 * 5,
        backgroundColor: 'transparent',
        width: WIDTH * 90 / 100,
        // height:HEIGHT/100*85,
        // paddingVertical: HEIGHT / 100 * 1,
    },
    titleText: {
        color: '#000000',
        fontSize: 20,
        // fontFamily: FAMILY.SansProSemibold,
        marginBottom: HEIGHT / 100 * 1,
    },
    container: {
        height: HEIGHT / 100 * 33,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headLine: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%'
    },
    catBox: {
        height: HEIGHT / 100 * 11.5,
        width: HEIGHT / 100 * 11.5,
        borderColor: '#C4C4C4',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: WIDTH / 100 * 2
    },
    catBox1: {
        height: HEIGHT / 100 * 11.5,
        width: HEIGHT / 100 * 11.5,
        borderColor: '#C4C4C4',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: WIDTH / 100 * 5
    },
    catText: {
        color: "#030712",
        fontSize: 10,
        // fontFamily: FAMILY.SansProRegular,
        textAlign: "center",
        height: 40,
        textAlignVertical: 'center',
        lineHeight: 12
    },
    BestBox: {
        // height: HEIGHT / 100 * 25,
        width: WIDTH < 400 ? WIDTH*60/100 : WIDTH / 100 * 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        padding: WIDTH / 100 * 1,
        marginRight: WIDTH / 100 * 2,
        flexDirection: "row",
        backgroundColor: 'white',
    },
    BestBoxs: {
        // height: HEIGHT / 100 * 25,
        width: WIDTH / 100 * 90,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        // padding: WIDTH / 100 * 1,
        marginRight: WIDTH / 100 * 2,
        flexDirection: "row",
        backgroundColor: 'white',
    },
    bestText: {
        color: '#2B2B2D',
        fontSize: 15,
        fontWeight: "600"
        // fontFamily: FAMILY.SansProRegular
    },
    bestText1: {
        marginBottom: HEIGHT * 2 / 100,
        color: '#ADADAD',
        fontSize: 13,
        fontWeight: "400"
    },
    orgText: {
        color: '#F53E32',
        fontSize: 16,
        fontWeight: '600'
        // fontFamily: FAMILY.SansProSemibold
    },
    crsText: {
        color: '#7A7A7A',
        fontSize: 13,
        // fontFamily: FAMILY.SansProRegular,
        marginLeft: WIDTH / 100 * 1,
        textDecorationLine: 'line-through'
    },
    starCount: {
        fontSize: 11,
        // fontFamily: FAMILY.PoppinsRegular,
        color: '#999999'
    },
    buyBtn: {
        height: HEIGHT / 100 * 4,
        width: '50%',
        backgroundColor: "#278BED",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        display: 'flex'
    },
    buyText: {
        fontSize: 13,
        textAlign: 'center',
        fontWeight: '600',
        // fontFamily: FAMILY.SansProSemibold,
        color: '#FFFFFF'
    },
    offPart: {
        height: HEIGHT / 100 * 37,
        width: WIDTH / 100 * 15,
        // padding:WIDTH/100*3,
        marginRight: WIDTH / 100 * 2,
        justifyContent: "space-evenly"
    },
    dealTitle: {
        color: "#DC2626",
        fontSize: 28,
        // fontFamily: FAMILY.SansProLight
    },
    dealTitle1: {
        color: "#8B96A5",
        fontSize: 16,
        // fontFamily: FAMILY.SansProRegular,
    },
    dayText: {
        // fontFamily: FAMILY.SansProBold,
        fontSize: 16,
        color: '#FFFFFF'
    },
    dayText1: {
        // fontFamily: FAMILY.SansProRegular,
        fontSize: 12,
        color: '#FFFFFF'
    },
    dayImgBack: {
        height: WIDTH / 100 * 2,
        width: WIDTH * 3.75 / 100,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
        paddingBottom: 15,
        marginRight: WIDTH / 100 * 0.5,
        marginTop: HEIGHT / 100 * 0.5,
        marginBottom: HEIGHT / 100 * 0.5,
        backgroundColor: 'red',
        display: 'flex'
    },
});

const ProductDetail: React.FC = () => {
    const styles = useStyles();
    const history = useNavigate();
    const [image1, setImage1] = useState([
        require('../../../assets/first.png'),
        require('../../../assets/second.png'),
        require('../../../assets/third.png'),
        require('../../../assets/fourth.png'),
    ])
    const [ind, setInd] = useState(0);
    const reviews = [
        {
            name: 'Srilipi Aditya Kashyap',
            date: '10th July 2021',
            rating: 4,
            review: 'Well we human race are enchanted by fine artefact, so what’s better than Fashion? This would be one of the best ways to attract attention towards the adverse effects of manoeuvring nature by developing a whole new set of values related to the environment.'
        },
        {
            name: 'Srilipi Aditya Kashyap',
            date: '10th July 2021',
            rating: 4,
            review: 'Well we human race are enchanted by fine artefact, so what’s better than Fashion? This would be one of the best ways to attract attention towards the adverse effects of manoeuvring nature by developing a whole new set of values related to the environment.'
        },
        {
            name: 'Srilipi Aditya Kashyap',
            date: '10th July 2021',
            rating: 4,
            review: 'Well we human race are enchanted by fine artefact, so what’s better than Fashion? This would be one of the best ways to attract attention towards the adverse effects of manoeuvring nature by developing a whole new set of values related to the environment.'
        },
    ];

    const accessories = [
        {
            title: '1 4 Channel HDTVI DVR for All Types CCTV Camera',
            price: '₹2000',
            oldPrice: '₹5000',
            rating: 4.5,
            image: 'https://via.placeholder.com/150',
            label: 'NEW'
        },
        {
            title: 'Protokraft 4 Channel Aluminium CCTV Camera Transceiver',
            price: '₹2000',
            oldPrice: '₹5000',
            rating: 4.5,
            image: 'https://via.placeholder.com/150',
            label: 'HOT'
        },
        {
            title: 'BNC Connector and DC Pin with Copper Wire Molded Combo Pack',
            price: '₹2000',
            oldPrice: '₹5000',
            rating: 4.5,
            image: 'https://via.placeholder.com/150',
            label: 'HOT'
        },
        {
            title: 'CCTV Camera with 4 Channel DVR, 1TB Hard Disk & 70 m Wire Kit',
            price: '₹2000',
            oldPrice: '₹5000',
            rating: 4.5,
            image: 'https://via.placeholder.com/150',
            label: 'HOT'
        },
        {
            title: 'Multicamera Video Switcher with 4 x HDMI Inputs',
            price: '₹2000',
            oldPrice: '₹5000',
            rating: 4.5,
            image: 'https://via.placeholder.com/150',
            label: 'HOT'
        }
    ];

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event: any, newValue: React.SetStateAction<number>) => {
        setTabIndex(newValue);
    };

    return (
        <>
            <Header />

            <Box style={{ width: WIDTH * 90 / 100, marginLeft: WIDTH * 5 / 100 }}>
                
                <Box display={'flex'} flexDirection={'row'}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={8}>
                            <Paper sx={{ p: 3 }} style={{ borderRadius: 10 }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{ position: 'relative' }}>
                                            <img
                                                src={image1[ind]}
                                                alt="Main Product"
                                                style={{ width: '100%', borderRadius: 4 }}
                                            />
                                            <IconButton sx={{ position: 'absolute', top: 8, right: 8, color: 'white' }}>
                                                <FavoriteBorderIcon />
                                            </IconButton>
                                            <Grid container spacing={1} sx={{ mt: 2 }} style={{ alignItems: 'center', }}>
                                                <Grid item>
                                                    <IconButton>
                                                        <ArrowBackIosIcon />
                                                    </IconButton>
                                                </Grid>
                                                {image1.map((src, index) => (
                                                    <Grid item key={index} style={{display: "flex", alignItems: 'center', justifyContent: 'center'}} onClick={() => { setInd(index) }}>
                                                        <img
                                                            src={src}
                                                            alt={`Thumbnail ${index + 1}`}
                                                            style={{
                                                                width: 92,
                                                                height: 92,
                                                                borderRadius: 4,
                                                                border: '1px solid #ccc',
                                                            }}
                                                        />
                                                    </Grid>
                                                ))}
                                                <Grid item>
                                                    <IconButton>
                                                        <ArrowForwardIosIcon />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <CardContent>
                                                <Typography variant="body2">Credenze Benefits</Typography>
                                                <List sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    padding: 0,
                                                }}>
                                                    {[{ title: 'GST Invoice Available', images: require('../../../assets/money.png') },
                                                    { title: 'Secure Payments', images: require('../../../assets/shielding.png') },
                                                    { title: '365 Days Help Desk', images: require('../../../assets/timer.png') }].map((benefit, index) => (
                                                        <ListItem style={{ marginLeft: '3px', borderWidth: 1, borderColor: '#DDDDDD' }} key={index}>
                                                            <img
                                                                src={benefit.images}
                                                                alt="Product"
                                                                style={{ marginRight: '5px' }}
                                                            />
                                                            <ListItemText sx={{
                                                                '& .MuiListItemText-primary': {
                                                                    fontSize: '10px',
                                                                }
                                                            }} primary={benefit.title} />
                                                        </ListItem>
                                                    ))}
                                                </List>

                                                <Typography variant="body2">Return & Warranty Policy</Typography>
                                                <List sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    padding: 0,
                                                }}>
                                                    {[
                                                        { title: '7 Days Brand Replacement', images: require('../../../assets/replace.png') },
                                                        { title: 'Missing Product', images: require('../../../assets/missing.png') },
                                                        { title: 'Wrong Product', images: require('../../../assets/wrong.png') },

                                                    ].map((policy, index) => (
                                                        <ListItem key={index}>
                                                            <img
                                                                src={policy.images}
                                                                alt="Product"
                                                                style={{ marginRight: '5px' }}
                                                            />
                                                            <ListItemText sx={{
                                                                '& .MuiListItemText-primary': {
                                                                    fontSize: '10px',
                                                                }
                                                            }} primary={policy.title} />
                                                        </ListItem>
                                                    ))}
                                                </List>

                                                <List sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    padding: 0,
                                                }}>
                                                    {[{ title: 'Damaged Product', images: require('../../../assets/damage.png') }].map((policy, index) => (
                                                        <ListItem key={index}>
                                                            <img
                                                                src={policy.images}
                                                                alt="Product"
                                                                style={{ marginRight: '5px' }}
                                                            />
                                                            <ListItemText sx={{
                                                                '& .MuiListItemText-primary': {
                                                                    fontSize: '10px',
                                                                }
                                                            }} primary={policy.title} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </CardContent>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{ alignItems: 'center' }}>
                                            <Chip label="Sale Off" style={{ marginBottom: '10px', backgroundColor: '#FDE0E9', color: "#F74B81" }} />
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: "black" }}>
                                                8MP Outdoor AI Surveillance Camera
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                            <Rating value={4.5} readOnly precision={0.5} />
                                            <Typography variant="body2" sx={{ ml: 1 }}>
                                                (32 reviews)
                                            </Typography>
                                        </Box>
                                        <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
                                            Colour
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                                            <Button variant="outlined" style={{ color: '#F74B81', borderColor: "#F74B81", borderWidth: 1 }}>White</Button>
                                            <Button variant="outlined" style={{ color: '#8A8A8A', borderColor: "#8A8A8A", borderWidth: 1 }}>Black</Button>
                                        </Box>
                                        <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
                                            Check Serviceability at your Pin code
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: 2, mt: 1, borderColor: '#DDDDDD', justifyContent: 'center', alignItems: 'center', borderRadius: 3 }} border={1} className="fits">
                                            <img
                                                src={require('../../../assets/locs.png')}
                                                alt="Main Product"
                                                style={{ width: '15px', height: "20px", marginLeft: '10px' }}
                                            />
                                            <TextField sx={{
                                                width: WIDTH < 400 ? 'auto' : 'auto',
                                                alignItems: 'center',
                                                '& fieldset': {
                                                    border: 'none',
                                                },
                                                '&:hover fieldset': {
                                                    border: 'none',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    border: 'none',
                                                },
                                                '& .MuiInputBase-input': {
                                                    height: '15px',
                                                },
                                            }} label="Enter Your Pin Code" />
                                            <Button variant="contained" color="primary" style={{ height: 45 }}>
                                                CHECK
                                            </Button>
                                        </Box>
                                        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                                            <Button variant="outlined" color="primary" style={{ width: 'auto', justifyContent: "flex-start", backgroundColor: "#F6FFF5" }}>
                                                <img
                                                    src={require('../../../assets/spin.png')}
                                                    alt="Main Product"
                                                    style={{ width: '18%' }}
                                                />
                                                <Typography style={{ fontSize: 10, display: "block", color: "#3BB77E", fontWeight: "700" }} className='algn1'>7 Days Brand Replacement</Typography>
                                            </Button>
                                            <Button variant="outlined" color="primary" style={{ backgroundColor: "#F6FFF5" }}>
                                                <img
                                                    src={require('../../../assets/badge.png')}
                                                    alt="Main Product"
                                                    style={{ width: '18%' }}
                                                />
                                                <Typography style={{ fontSize: 10, color: "#3BB77E", fontWeight: "700" }} className='algn1'>1 Year Warranty</Typography>
                                            </Button>
                                        </Box>
                                        <Typography variant="body1" sx={{ mt: 3 }}>
                                            The Surveillance Camera is a state-of-the-art CCTV solution designed to provide comprehensive security
                                            monitoring for both residential and commercial properties. With its advanced features and robust
                                            construction, this camera ensures reliable performance and peace of mind.
                                        </Typography>
                                        <Typography variant="h6" component="h3" sx={{ mt: 3 }}>
                                            Key Features
                                        </Typography>
                                        <List sx={{ padding: 0 }}>
                                            {[
                                                'High Resolution',
                                                'Weatherproofing',
                                                'Infrared Night Vision',
                                                'Motion Detection',
                                                'Object Recognition',
                                                'Cloud Storage and Remote Access',
                                                'Tamper Detection',
                                                'Integration with Smart Home Systems',
                                            ].map((feature, index) => (
                                                <ListItem key={index}>
                                                    <img
                                                        src={require('../../../assets/checkcircle.png')}
                                                        alt="tick"
                                                        style={{ marginRight: '10px' }}
                                                    />
                                                    <Typography variant="body2">{feature}</Typography>
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Typography variant="h6" component="h3" sx={{ mt: 3 }}>
                                            Offers & Coupons
                                        </Typography>

                                        <Paper elevation={0} sx={{ p: 2, mt: 2 }}>
                                            {[
                                                'Get Flat 100 Off on CCTV Cameras',
                                                'Get GST Invoice and save up to 18%',
                                                'EMIs Available on min purchases of Rs. 3000',
                                            ].map((offer, index) => (
                                                <Box
                                                    key={index}
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        mb: 1,
                                                    }}
                                                >
                                                    <Typography variant="body2">{offer}</Typography>
                                                    <Button variant="outlined" size="small">
                                                        VIEW
                                                    </Button>
                                                </Box>
                                            ))}

                                        </Paper>

                                        <Button variant="contained" color="primary" fullWidth>
                                            VIEW ALL OFFERS
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>

                        </Grid>
                        <Grid item xs={12} lg={4} style={{ marginTop: -HEIGHT * 3.5 / 100, padding: 0 }}>
                            <DetailPageSide />
                        </Grid>
                    </Grid>
                </Box>

                <Box flexDirection={'row'} display={'flex'} style={{ marginTop: HEIGHT * 3 / 100, marginBottom: HEIGHT * 3 / 100 }}>
                    <Button variant="contained" style={{ height: 45, backgroundColor: 'white', borderRadius: 20, color: "#DC2626" }} onClick={() => handleTabChange("", 0)}>
                        Description
                    </Button>
                    <Button variant="contained" style={{ height: 45, backgroundColor: 'white', borderRadius: 20, color: "#7E7E7E", marginLeft: '30px' }} onClick={() => handleTabChange("", 1)}>
                        Specification
                    </Button>
                    <Button variant="contained" style={{ height: 45, backgroundColor: 'white', borderRadius: 20, color: "#7E7E7E", marginLeft: '30px' }} onClick={() => handleTabChange("", 2)}>
                        Instruction
                    </Button>
                </Box>

                <Card variant="outlined" style={{ borderRadius: 10 }}>
                    <CardContent>
                        {tabIndex === 0 && (
                            <Box sx={{ p: 4, marginTop: '10px' }}>
                                <Typography variant="body1" gutterBottom>
                                    The XYZ Surveillance Camera is a state-of-the-art CCTV solution designed to provide comprehensive security monitoring for both residential and commercial properties. With its advanced features and robust construction, this camera ensures reliable performance and peace of mind.
                                </Typography>
                                <Typography variant="h5" gutterBottom style={{ fontWeight: "700", marginTop: '20px' }}>
                                    Packaging & Delivery
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Less lion goodness that euphemistically robin expeditiously blubbed smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anthematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.
                                </Typography>
                                <Typography variant="h5" gutterBottom style={{ fontWeight: "700", marginTop: '20px' }}>
                                    Key Features
                                </Typography>
                                <List sx={{
                                    padding: 0,
                                }}>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="1. High Definition Video: Capture crisp and clear footage in stunning high definition, allowing for accurate identification of subjects and incidents." />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="2. Night Vision: Equipped with infrared LEDs, this camera delivers exceptional night vision capabilities, ensuring round-the-clock surveillance even in low-light conditions." />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="3. Wide-Angle Lens: The wide-angle lens provides extensive coverage, reducing blind spots and maximizing surveillance area." />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="4. Motion Detection: Detects motion within its field of view and triggers instant alerts, keeping you informed of any suspicious activity in real-time." />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="5. Weatherproof Design: Built to withstand harsh weather conditions, this camera is suitable for both indoor and outdoor installations, ensuring reliable performance in any environment." />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="6. Remote Viewing: Access live footage and recordings from anywhere using a smartphone, tablet, or computer, providing convenient monitoring on the go." />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="7. Easy Installation: Simple to set up and configure, allowing for hassle-free installation by users of all skill levels." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="8. Secure Storage: Supports various storage options, including local storage via SD card and cloud storage, ensuring secure retention of footage for future reference." />
                                    </ListItem>
                                </List>
                                <Typography variant="h5" gutterBottom style={{ fontWeight: "700", marginTop: '20px' }}>
                                    Technical Specifications
                                </Typography>
                                <List>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="• Resolution: 1080p Full HD" />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="• Lens: Wide-angle lens" />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="• Night Vision Range: Up to 30 meters" />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="• Motion Detection Range: Adjustable" />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="• Connectivity: Wi-Fi, Ethernet" />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="• Power Supply: DC 12V" />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="• Operating Temperature: -20°C to 50°C" />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="• Dimensions: (L x W x H) 150mm x 80mm x 70mm" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="• Weight: 300g" />
                                    </ListItem>
                                </List>
                                <Typography variant="h5" gutterBottom style={{ fontWeight: "700", marginTop: '20px' }}>
                                    Download Center
                                </Typography>
                                <List>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="• Firmware_V5.8.0_230722" />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="• Data Sheet" />
                                    </ListItem>
                                    <ListItem sx={{
                                        marginBottom: -3,
                                    }}>
                                        <ListItemText primary="• Quick Start Guide" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="• User Manual" />
                                    </ListItem>
                                </List>
                            </Box>
                        )}

                        {tabIndex === 1 && (
                            <Box sx={{ p: 2 }}>
                                <Typography variant="body1">
                                    Specification content goes here.
                                </Typography>
                            </Box>
                        )}

                        {tabIndex === 2 && (
                            <Box sx={{ p: 2 }}>
                                <Typography variant="body1">
                                    Instruction content goes here.
                                </Typography>
                            </Box>
                        )}
                    </CardContent>
                </Card>

                <Accordion sx={{ boxShadow: 'none' }} defaultExpanded style={{ backgroundColor: "transparent" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Reviews & Ratings</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{padding: 0}}>
                        <Card variant="outlined" style={{ borderRadius: 10, padding: WIDTH * 3 / 100}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={7} md={6}>
                                    <Box display="flex">
                                        <Box>
                                            <Typography variant="h3" sx={{ color: '#4CAF50', marginRight: WIDTH * 0.3 / 100, fontWeight: "700" }}>5.32</Typography>
                                            <Typography variant="body1">130 Ratings</Typography>
                                        </Box>
                                        <Box>
                                            <Grid container spacing={1} alignItems="center">
                                                <Grid item xs={1}>
                                                    <Typography variant="body2">5</Typography>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <img
                                                        src={require('../../../assets/greenstar.png')}
                                                        alt="star"
                                                        style={{}}
                                                    />
                                                </Grid>
                                                <Grid item xs={9}>
                                                    <LinearProgress sx={{
                                                        height: '7px', '& .MuiLinearProgress-bar': {
                                                            backgroundColor: '#3BB77E',
                                                        }, backgroundColor: "#E8E8E8"
                                                    }} variant="determinate" value={80} />
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Typography variant="body2">80%</Typography>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Typography variant="body2">4</Typography>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <img
                                                        src={require('../../../assets/greenstar.png')}
                                                        alt="star"
                                                        style={{}}
                                                    />
                                                </Grid>
                                                <Grid item xs={9}>
                                                    <LinearProgress sx={{
                                                        height: '7px', '& .MuiLinearProgress-bar': {
                                                            backgroundColor: '#3BB77E',
                                                        }, backgroundColor: "#E8E8E8"
                                                    }} variant="determinate" value={10} />
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Typography variant="body2">10%</Typography>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Typography variant="body2">3</Typography>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <img
                                                        src={require('../../../assets/greenstar.png')}
                                                        alt="star"
                                                        style={{}}
                                                    />
                                                </Grid>
                                                <Grid item xs={9}>
                                                    <LinearProgress sx={{
                                                        height: '7px', '& .MuiLinearProgress-bar': {
                                                            backgroundColor: '#3BB77E',
                                                        }, backgroundColor: "#E8E8E8"
                                                    }} variant="determinate" value={5} />
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Typography variant="body2">5%</Typography>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Typography variant="body2">2</Typography>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <img
                                                        src={require('../../../assets/greenstar.png')}
                                                        alt="star"
                                                        style={{}}
                                                    />
                                                </Grid>
                                                <Grid item xs={9}>
                                                    <LinearProgress sx={{
                                                        height: '7px', '& .MuiLinearProgress-bar': {
                                                            backgroundColor: '#3BB77E',
                                                        }, backgroundColor: "#E8E8E8"
                                                    }} variant="determinate" value={3} />
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Typography variant="body2">3%</Typography>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Typography variant="body2">1</Typography>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <img
                                                        src={require('../../../assets/greenstar.png')}
                                                        alt="star"
                                                        style={{}}
                                                    />
                                                </Grid>
                                                <Grid item xs={9}>
                                                    <LinearProgress sx={{
                                                        height: '7px', '& .MuiLinearProgress-bar': {
                                                            backgroundColor: '#3BB77E',
                                                        }, backgroundColor: "#E8E8E8"
                                                    }} variant="determinate" value={2} />
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Typography variant="body2">2%</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                    {/* <Box ml={2}>
                                        <Typography variant="body1">130 Ratings</Typography>
                                    </Box> */}
                                </Grid>
                                <Grid item xs={12} sm={5} md={4}>
                                    <Box style={{ justifyContent: "flex-start" }}>
                                        <Typography variant="body1" style={{ marginTop: '10px' }}>Do you own or have used the product?</Typography>
                                        <Typography variant='body2' style={{ marginTop: '10px', color: "#9E9E9E" }}>Tell your experience about this product</Typography>
                                        <Box display="flex" alignItems="center" style={{ marginTop: '10px', marginLeft: '0px' }}>
                                            <Rating value={0} precision={1} />
                                        </Box>
                                        <Button variant="contained" color="primary" sx={{ ml: 2 }} style={{ marginTop: '10px', marginLeft: '0px', backgroundColor: "#EC0000" }}>
                                            WRITE A REVIEW
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Card>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ boxShadow: 'none' }} defaultExpanded style={{ backgroundColor: "transparent" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>All Reviews (132)</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{padding: 0}}>
                        {reviews.map((review, index) => (
                            <Paper key={index} sx={{ p: 3, my: 2, borderRadius: 2}}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Avatar>{review.name.charAt(0)}</Avatar>
                                    </Grid>
                                    <Grid item xs>
                                        <Box display="flex" justifyContent="space-between">
                                            <Typography variant="body1"><strong>{review.name}</strong></Typography>
                                            <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                                                <Button startIcon={<ThumbUpAltOutlinedIcon />} size="small">120</Button>
                                                <Button startIcon={<ThumbDownAltOutlinedIcon />} size="small" sx={{ ml: 2 }}>20</Button>
                                            </Box>
                                        </Box>
                                        <Box display="flex" style={{marginBottom: HEIGHT*0.5/100}}>
                                            <Typography variant="body2" color="textSecondary" style={{marginRight: WIDTH*2/100, color: "#EC0000"}}>{review.date}</Typography>
                                            <Typography variant="body2" color="textSecondary" style={{color: "#3BB77E"}}>Verified Purchase</Typography>
                                        </Box>
                                        <Box display="flex" alignItems="center">
                                            <Rating value={review.rating} readOnly />
                                            <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>{review.rating}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Typography variant="body2" sx={{ mt: 1 }}>{review.review}</Typography>
                            </Paper>
                        ))}
                    </AccordionDetails>
                </Accordion>

                <Box mt={4}>
                    <Typography variant="h5" gutterBottom style={{marginBottom: HEIGHT*3/100}}>
                        Accessories for your product
                    </Typography>
                    <Grid container spacing={2} style={{marginBottom: HEIGHT*10/100}}>
                        {accessories.map((accessory, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={2.3} key={index} style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                                <Box
                                    sx={{
                                        boxShadow: 2,
                                    }}
                                    className={styles.BestBox}>
                                    <Box style={{ width: '100%', alignItems: "center", flexDirection: "row", justifyContent: "space-between", display: 'flex' }}>
                                        <Box component="img"
                                            src={require('../../../assets/Home/Like.png')} />
                                        <Box component="img"
                                            src={require('../../../assets/hot.png')} />
                                    </Box>
                                    <Box
                                        style={{ height: HEIGHT / 100 * 23, alignItems: "center", justifyContent: "center", marginTop: HEIGHT / 100 * 1, marginBottom: HEIGHT / 100 * 1, width: '100%' }}>
                                        <Box
                                            component="img"
                                            // resizeMode='contain'
                                            style={{ width: '80%', height: HEIGHT * 23 / 100 }}
                                            src={require('../../../assets/Home/Cctv.png')} />
                                    </Box>
                                    <label className={styles.bestText1}>Category</label>
                                    <Box style={{ }}>
                                        <label className={styles.bestText}>2 MP Build-in Mic Fixed Bullet Network Camera</label>
                                    </Box>
                                    <Box style={{ flexDirection: 'row', display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                                        <Box style={{ flexDirection: "row", alignItems: "center" }}>
                                            <label className={styles.orgText}>₹2000</label>
                                            <label className={styles.crsText}>₹5000</label>
                                        </Box>
                                        <Box sx={{ '& .MuiRating-icon': { fontSize: 10 } }}>
                                                    <Rating value={4} readOnly size={'small'} />
                                                </Box>
                                        {/* <Box component="img" src={require('../../../assets/stars.png')} /> */}
                                        <Box style={{ flexDirection: "row", alignItems: "center" }}>
                                            <label className={styles.starCount}>(4.5)</label>
                                        </Box>
                                    </Box>
                                    <Box style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginTop: HEIGHT / 100 * 1, width: '100%', display: 'flex' }}>
                                        <Checkbox name="antoine" {...label} />
                                        <Box className={styles.buyBtn}>
                                            <label className={styles.buyText}>Buy Now</label>
                                        </Box>
                                        <Box
                                            component="img"
                                            style={{ width: HEIGHT / 100 * 4, height: HEIGHT / 100 * 4 }}
                                            src={require('../../../assets/Home/Cart.png')} />
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                
            </Box>

            <Footer />
        </>
    );
};

export default ProductDetail;