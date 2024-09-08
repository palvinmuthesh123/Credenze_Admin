import React, { useEffect, useRef, useState } from 'react';
import { BestSeller, category, DealBox } from '../../data/raw';
import { Box, Card, CardContent, CardMedia, Container, Grid, Paper, Rating, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './Home.css'
import Checkbox from '@mui/material/Checkbox';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useNavigate } from 'react-router-dom';
import { GET_LAYOUTS } from '../../redux/apis';
import { styled } from '@mui/system';

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
        // fontFamily: FAMILY.SansProSemibold,
        marginBottom: HEIGHT / 100 * 1,
        fontSize: 30,
        display: "block",
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
        // width: WIDTH < 400 ? WIDTH * 60 / 100 : 'auto',
        width: WIDTH < 400 ? WIDTH*45/100 : WIDTH / 100 * 15,
        // width: WIDTH,
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
        fontWeight: "600",
        // width: '70%'
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
        width: '60px',
        backgroundColor: "#278BED",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        display: 'flex',
        marginRight: '5px'
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

const HomePage = () => {
    const history = useNavigate();
    const styles = useStyles();
    const [data, setData] = useState<any[]>([])
    const deals = [
        { discount: '-35%', image: require('../../../assets/Home/Cctv.png'), name: 'Camera Name' },
        { discount: '-35%', image: require('../../../assets/Home/Cctv.png'), name: 'Camera Name' },
        { discount: '-05%', image: require('../../../assets/Home/Cctv.png'), name: 'Camera Name' },
        { discount: '-45%', image: require('../../../assets/Home/Cctv.png'), name: 'Camera Name' },
        { discount: '-35%', image: require('../../../assets/Home/Cctv.png'), name: 'Camera Name' },
        { discount: '-15%', image: require('../../../assets/Home/Cctv.png'), name: 'Camera Name' },
        { discount: '-25%', image: require('../../../assets/Home/Cctv.png'), name: 'Camera Name' },
    ];

    useEffect(() => {
        // console.log(WIDTH, HEIGHT, "OOOOOOOOOOOOOO")
        getContents();
    }, [])

    const getContents = async () => {
        // const response = await fetch(GET_LAYOUTS)
        const response = await fetch(GET_LAYOUTS)
            .then(response => response.json())
            .then(data => { console.log(data); setData(data) })
            .catch(error => console.error(error));
    }

    const ScrollContainer = styled(Box)({
        display: 'flex',
        overflowX: 'scroll',
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar for WebKit browsers
        },
        backgroundColor: "white"
    });

    const DealsAndOffers = () => {
        return (
            <>
                <Grid container spacing={3} style={{ backgroundColor: "white", padding: 2 }}>
                    <Grid item xs={12} md={3}>
                        <Box mt={4} mb={2}>
                            <Typography variant="h4" align="left" gutterBottom>
                                Deals and offers
                            </Typography>
                            <Typography variant="subtitle1" align="left" gutterBottom>
                                Simplify Access Elevate Security
                            </Typography>
                        </Box>
                        <Paper elevation={0} sx={{ padding: 0, backgroundColor: "transparent" }}>
                            <Stack direction="row" display={'flex'} justifyContent="center" spacing={0}>
                                <Paper elevation={0} sx={{ padding: 0, color: '#fff', backgroundColor: "transparent" }}>
                                    <Grid container>
                                        <Grid item xs={2.5} style={{ marginRight: '10px' }}>
                                            <Typography variant="h6" style={{ backgroundColor: '#ff0000', textAlign: 'center', borderRadius: 10 }}>04 Days</Typography>
                                        </Grid>
                                        <Grid item xs={2.5} style={{ marginRight: '10px' }}>
                                            <Typography variant="h6" style={{ backgroundColor: '#ff0000', textAlign: 'center', borderRadius: 10 }}>13 Hour</Typography>
                                        </Grid>
                                        <Grid item xs={2.5} style={{ marginRight: '10px' }}>
                                            <Typography variant="h6" style={{ backgroundColor: '#ff0000', textAlign: 'center', borderRadius: 10 }}>34 Mins</Typography>
                                        </Grid>
                                        <Grid item xs={2.5} style={{ marginRight: '10px' }}>
                                            <Typography variant="h6" style={{ backgroundColor: '#ff0000', textAlign: 'center', borderRadius: 10 }}>56 Secs</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <ScrollContainer>
                            {deals.map((deal, index) => (
                                <Box key={index} sx={{ minWidth: 200, mx: 1, backgroundColor: "white" }}>
                                    <Paper sx={{ padding: 2, textAlign: 'center', backgroundColor: 'white' }} onClick={() => { history('/productlist') }}>
                                        <img
                                            src={deal.image}
                                            alt={deal.name}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                        <Typography variant="h6" align="center">
                                            {deal.name}
                                        </Typography>
                                        <Typography variant="h5" align="center" color="error">
                                            {deal.discount}
                                        </Typography>
                                    </Paper>
                                </Box>
                            ))}
                        </ScrollContainer>
                    </Grid>
                </Grid>
            </>
        );
    };

    return (
        <>
            {/* <StatusBar backgroundColor='#278BED' barStyle="dark-content" /> */}
            <Header />
            <Box
                flexDirection={'row'}
                style={{ backgroundColor: '#fbfbfb', width: WIDTH * 90 / 100, marginLeft: WIDTH * 4.5 / 100, marginBottom: HEIGHT * 6 / 100 }}>
                <>
                    <Box className={styles.mainPart}>
                        <Box sx={{
                            width: '100%',
                            overflow: 'auto',
                            borderRadius: '4px',
                            padding: '10px',
                            boxShadow: 2,
                            border: '1px solid transparent',
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                        }} style={{ marginTop: HEIGHT / 100 * 1.5, display: 'flex' }}>
                            {BestSeller.map((item, index) => {
                                return (
                                    <Box className={styles.BestBoxs}>
                                        <Box
                                            component="img"
                                            style={{ height: HEIGHT * 60 / 100, width: WIDTH * 90 / 100 }}
                                            src={require('../../../assets/Home/Banner.png')}
                                        />
                                    </Box>
                                )
                            })}

                        </Box>

                        <Box style={{
                            marginTop: HEIGHT / 100 * 4, flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: '100%'
                        }}>
                            <label className={styles.titleText}>{data && data[0] && data[0].layoutTitle ? data[0].layoutTitle : "Best Sellers"}</label>
                        </Box>
                        <Box sx={{
                            width: '100%',
                            overflow: 'auto',
                            borderRadius: '4px',
                            padding: '10px',
                            border: '1px solid transparent',
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                            marginBottom: HEIGHT * 1 / 100
                        }} style={{ marginTop: HEIGHT / 100 * 1.5, display: 'flex' }}>
                            {data &&
                                data[0] &&
                                data[0].productsList &&
                                data[0].productsList.pageableProducts &&
                                data[0].productsList.pageableProducts.content ?
                                data[0].productsList.pageableProducts.content.map((item: any, index: any) => {
                                    return (
                                        <Box
                                            onClick={() => history('/productdetail')}
                                            sx={{
                                                boxShadow: 2,
                                            }} className={styles.BestBox}>
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
                                                    src={item && item.productImageUrl ? item.productImageUrl : undefined} />
                                            </Box>
                                            <label className={styles.bestText1}>Category : {item.category.categoryName}</label>
                                            <Box style={{}}>
                                                <label className={styles.bestText}>{item.displayName ? item.displayName : "2 MP Build-in Mic Fixed Bullet Network Camera"}</label>
                                            </Box>
                                            <Box style={{ flexDirection: 'row', display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                                                <Box style={{ flexDirection: "row", alignItems: "center" }}>
                                                    {item.salePrice ? <label className={styles.orgText}>{item.salePrice}</label> : <label className={styles.orgText}>₹2000</label>}
                                                    {item.mrpPrice ? <label className={styles.crsText}>{item.mrpPrice}</label> : <label className={styles.crsText}>₹5000</label>}
                                                </Box>
                                                {/* <Box component="img"
                                                    src={require('../../../assets/stars.png')} /> */}
                                                <Box sx={{ '& .MuiRating-icon': { fontSize: 10 } }}>
                                                    <Rating value={4} readOnly size={'small'} />
                                                </Box>
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
                                                {/* <Box
                                                    component="img"
                                                    style={{ width: HEIGHT / 100 * 4, height: HEIGHT / 100 * 4 }}
                                                    src={require('../../../assets/Home/Detail.png')} /> */}
                                            </Box>
                                        </Box>
                                    )
                                }) : null}

                        </Box>

                        {/* <Box style={{
                            marginTop: HEIGHT / 100 * 4, flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: '100%'
                        }}>
                            <label className={styles.titleText}>Deals & Offers</label>
                        </Box> */}

                        {/* <Box style={{ marginTop: HEIGHT / 100 * 1.5, display: 'flex', flexDirection: 'row', marginBottom: HEIGHT*5/100 }}>
                            <Box className={styles.offPart}>
                                <label className={styles.dealTitle}>Deals and offers</label><br />
                                <label className={styles.dealTitle1}>Simplify Access Elevate Security</label>
                                <Box flexDirection={'row'} display={'flex'}>
                                    {DealBox.map((item, index) => {
                                        return (
                                            <Box>
                                                <Box
                                                    className={styles.dayImgBack} borderRadius={2}>
                                                    <label className={styles.dayText}>{item.time}</label>
                                                    <label className={styles.dayText1}>{item.name}</label>
                                                </Box>
                                            </Box>)
                                    })}
                                </Box>
                            </Box>
                            <Box sx={{
                                width: '100%',
                                overflow: 'auto',
                                borderRadius: '4px',
                                padding: '10px',
                                border: '1px solid transparent',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }} style={{ display: 'flex' }}>
                                {BestSeller.map((item, index) => {
                                    return (
                                        <Box sx={{
                                            boxShadow: 2,
                                        }} className={styles.BestBox}>
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
                                                    style={{ width: '80%', height: HEIGHT * 23 / 100 }}
                                                    src={require('../../../assets/Home/Cctv.png')} />
                                            </Box>
                                            <label className={styles.bestText1}>Category</label>
                                            <Box style={{ height: HEIGHT / 100 * 5, }}>
                                                <label className={styles.bestText}>2 MP Build-in Mic Fixed Bullet Network Camera</label>
                                            </Box>
                                            <Box style={{ flexDirection: 'row', display: 'flex', alignItems: "center", justifyContent: 'center', height: HEIGHT * 5 / 100 }}>
                                                <Box style={{ flexDirection: "row", alignItems: "center", marginTop: HEIGHT * 2 / 100 }}>
                                                    <label className={styles.orgText}>₹2000</label>
                                                    <label className={styles.crsText}>₹5000</label>
                                                </Box>
                                                <Box component="img"
                                                    src={require('../../../assets/stars.png')} />
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
                                    )
                                })}
                            </Box>
                        </Box> */}

                        <DealsAndOffers />

                        <label style={{
                            marginTop: HEIGHT / 100 * 4,
                            color: '#000000',
                            fontSize: 30,
                            display: "block",
                            // fontFamily:FAMILY.SansProSemibold,
                            marginBottom: HEIGHT / 100 * 1,
                        }}>{data && data[1] && data[1].layoutTitle ? data[1].layoutTitle : "Dome CCTV Cameras"}</label>
                        <Box style={{ marginTop: HEIGHT / 100 * 1.5, display: 'flex', flexDirection: 'row' }}>
                            <Box
                                component="img"
                                style={{ height: HEIGHT * 56 / 100, width: WIDTH < 400 ? WIDTH * 60 / 100 : WIDTH * 20 / 100, borderRadius: 15, marginLeft: WIDTH * 1 / 100, marginRight: WIDTH * 1 / 100, marginTop: HEIGHT * 2 / 100 }}
                                src={require('../../../assets/Home/Banner1.png')} />
                            <Box sx={{
                                width: '100%',
                                // height: '300px',
                                overflow: 'auto',
                                borderRadius: '4px',
                                padding: '10px',
                                border: '1px solid transparent',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }} style={{ display: 'flex' }}>
                                {data &&
                                    data[1] &&
                                    data[1].productsList &&
                                    data[1].productsList.pageableProducts &&
                                    data[1].productsList.pageableProducts.content ?
                                    data[1].productsList.pageableProducts.content.map((item: any, index: any) => {
                                        return (
                                            <Box
                                                onClick={() => history('/productdetail')}
                                                sx={{
                                                    boxShadow: 2,
                                                }} className={styles.BestBox}>
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
                                                        src={item && item.productImageUrl ? item.productImageUrl : undefined} />
                                                </Box>
                                                <label className={styles.bestText1}>Category : {item.category.categoryName}</label>
                                                <Box style={{}}>
                                                    <label className={styles.bestText}>{item.displayName ? item.displayName : "2 MP Build-in Mic Fixed Bullet Network Camera"}</label>
                                                </Box>
                                                <Box style={{ flexDirection: 'row', display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                                                    <Box style={{ flexDirection: "row", alignItems: "center" }}>
                                                        {item.salePrice ? <label className={styles.orgText}>{item.salePrice}</label> : <label className={styles.orgText}>₹2000</label>}
                                                        {item.mrpPrice ? <label className={styles.crsText}>{item.mrpPrice}</label> : <label className={styles.crsText}>₹5000</label>}
                                                    </Box>
                                                    {/* <Box component="img"
                                                    src={require('../../../assets/stars.png')} /> */}
                                                    <Box sx={{ '& .MuiRating-icon': { fontSize: 10 } }}>
                                                        <Rating value={4} readOnly size={'small'} />
                                                    </Box>
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
                                                    {/* <Box
                                                    component="img"
                                                    style={{ width: HEIGHT / 100 * 4, height: HEIGHT / 100 * 4 }}
                                                    src={require('../../../assets/Home/Detail.png')} /> */}
                                                </Box>
                                            </Box>
                                        )
                                    }) : null}
                            </Box>
                        </Box>

                        <label style={{
                            marginTop: HEIGHT / 100 * 4,
                            color: '#000000',
                            // fontFamily:FAMILY.SansProSemibold,
                            marginBottom: HEIGHT / 100 * 1,
                            fontSize: 30,
                            display: "block",
                        }}>{data && data[2] && data[2].layoutTitle ? data[2].layoutTitle : "Bullet CCTV Cameras"}</label>
                        <Box style={{ marginTop: HEIGHT / 100 * 1.5, display: 'flex', flexDirection: 'row' }}>
                            <Box
                                component="img"
                                style={{ height: HEIGHT * 56 / 100, width: WIDTH < 400 ? WIDTH * 60 / 100 : WIDTH * 20 / 100, borderRadius: 15, marginLeft: WIDTH * 1 / 100, marginRight: WIDTH * 1 / 100, marginTop: HEIGHT * 2 / 100 }}
                                src={require('../../../assets/Home/Banner1.png')} />
                            <Box sx={{
                                width: '100%',
                                // height: '300px',
                                overflow: 'auto',
                                borderRadius: '4px',
                                padding: '10px',
                                border: '1px solid transparent',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }} style={{ display: 'flex' }}>
                                {data &&
                                    data[2] &&
                                    data[2].productsList &&
                                    data[2].productsList.pageableProducts &&
                                    data[2].productsList.pageableProducts.content ?
                                    data[2].productsList.pageableProducts.content.map((item: any, index: any) => {
                                        return (
                                            <Box
                                                onClick={() => history('/productdetail', { state: item })}
                                                sx={{
                                                    boxShadow: 2,
                                                }} className={styles.BestBox}>
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
                                                        src={item && item.productImageUrl ? item.productImageUrl : undefined} />
                                                </Box>
                                                <label className={styles.bestText1}>Category : {item.category.categoryName}</label>
                                                <Box style={{}}>
                                                    <label className={styles.bestText}>{item.displayName ? item.displayName : "2 MP Build-in Mic Fixed Bullet Network Camera"}</label>
                                                </Box>
                                                <Box style={{ flexDirection: 'row', display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                                                    <Box style={{ flexDirection: "row", alignItems: "center" }}>
                                                        {item.salePrice ? <label className={styles.orgText}>{item.salePrice}</label> : <label className={styles.orgText}>₹2000</label>}
                                                        {item.mrpPrice ? <label className={styles.crsText}>{item.mrpPrice}</label> : <label className={styles.crsText}>₹5000</label>}
                                                    </Box>
                                                    {/* <Box component="img"
                                                    src={require('../../../assets/stars.png')} /> */}
                                                    <Box sx={{ '& .MuiRating-icon': { fontSize: 10 } }}>
                                                        <Rating value={4} readOnly size={'small'} />
                                                    </Box>
                                                    <Box style={{ flexDirection: "row", alignItems: "center" }}>
                                                        <label className={styles.starCount}>(4.5)</label>
                                                    </Box>
                                                </Box>
                                                <Box style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginTop: HEIGHT / 100 * 1, width: '100%', display: 'flex' }}>
                                                    <Checkbox name="antoine" {...label} />
                                                    <label style={{marginRight: '10px', fontSize: 10}}>Compare</label>
                                                    <Box className={styles.buyBtn}>
                                                        <label className={styles.buyText}>Buy Now</label>
                                                    </Box>
                                                    <Box
                                                        component="img"
                                                        style={{ width: HEIGHT / 100 * 4, height: HEIGHT / 100 * 4 }}
                                                        src={require('../../../assets/Home/Cart.png')} />
                                                    {/* <Box
                                                    component="img"
                                                    style={{ width: HEIGHT / 100 * 4, height: HEIGHT / 100 * 4 }}
                                                    src={require('../../../assets/Home/Detail.png')} /> */}
                                                </Box>
                                            </Box>
                                        )
                                    }) : null}
                            </Box>
                        </Box>

                        <Grid container spacing={2} className='algn' style={{ marginTop: 10 }}>
                            <Grid item xs={12} lg={4}>
                                <Box sx={{
                                    boxShadow: 2,
                                }} style={{ flexDirection: 'row', display: 'flex', height: WIDTH < 400 ? 'auto' : HEIGHT * 28 / 100, backgroundColor: 'white', width: WIDTH < 400 ? WIDTH * 80 / 100 : WIDTH * 28 / 100 }}>
                                    <Box style={{ width: WIDTH < 400 ? 'auto' : WIDTH * 14 / 100, marginLeft: WIDTH * 2 / 100, }}>
                                        <Typography style={{ color: '#DE0909', fontWeight: "600", marginTop: HEIGHT * 4 / 100 }} variant="body2">Need Any Assistance ?</Typography>
                                        <Typography variant="body2">Type Hi</Typography>
                                        <Typography style={{ color: 'grey' }} variant="body1">To Get Instant Whatsapp Support</Typography>
                                        <Box style={{ backgroundColor: '#DE0909', width: WIDTH < 400 ? 'auto' : WIDTH * 8 / 100, borderRadius: "20px", marginTop: HEIGHT * 2 / 100, paddingTop: 2.9, paddingBottom: 2.9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography style={{ color: 'white', fontSize: 11, fontWeight: '500' }}>{"Whatsapp Now -->"}</Typography>
                                        </Box>
                                    </Box>
                                    <Box
                                        component="img"
                                        src={require('../../../assets/Home/whatsapp.jpg')}
                                        style={{ height: HEIGHT * 23 / 100, width: WIDTH < 400 ? 'auto' : WIDTH * 13 / 100 }}>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box sx={{
                                    boxShadow: 2,
                                }} style={{ flexDirection: 'row', display: 'flex', height: WIDTH < 400 ? 'auto' : HEIGHT * 28 / 100, backgroundColor: 'white', width: WIDTH < 400 ? WIDTH * 80 / 100 : WIDTH * 28 / 100 }}>
                                    <Box style={{ width: WIDTH < 400 ? 'auto' : WIDTH * 14 / 100, marginLeft: WIDTH * 2 / 100, }}>
                                        <Typography style={{ color: '#DE0909', fontWeight: "600", marginTop: HEIGHT * 4 / 100 }} variant="body2">Do you need in bulk?</Typography>
                                        <Typography variant="body2">We are Always There </Typography>
                                        <Typography style={{ color: 'grey' }} variant="body1">Send your Query to Help You</Typography>
                                        <Box style={{ backgroundColor: '#DE0909', width: WIDTH < 400 ? 'auto' : WIDTH * 8 / 100, borderRadius: "20px", marginTop: HEIGHT * 2 / 100, paddingTop: 2.9, paddingBottom: 2.9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography style={{ color: 'white', fontSize: 11, fontWeight: '500' }}>{"SEND QUERY -->"}</Typography>
                                        </Box>
                                    </Box>
                                    <Box
                                        component="img"
                                        src={require('../../../assets/Home/query.jpg')}
                                        style={{ height: HEIGHT * 23 / 100, width: WIDTH < 400 ? 'auto' : WIDTH * 13 / 100 }}>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box sx={{
                                    boxShadow: 2,
                                }} style={{ flexDirection: 'row', display: 'flex', height: WIDTH < 400 ? 'auto' : HEIGHT * 28 / 100, backgroundColor: 'white', width: WIDTH < 400 ? WIDTH * 80 / 100 : WIDTH * 28 / 100 }}>
                                    <Box style={{ width: WIDTH < 400 ? 'auto' : WIDTH * 14 / 100, marginLeft: WIDTH * 2 / 100, }}>
                                        <Typography style={{ color: '#DE0909', fontWeight: "600", marginTop: HEIGHT * 4 / 100 }} variant="body2">Don't Get Worried ?</Typography>
                                        <Typography variant="body2">Track Order</Typography>
                                        <Typography style={{ color: 'grey' }} variant="body1">Track your order Any time Any where</Typography>
                                        <Box style={{ backgroundColor: '#DE0909', width: WIDTH < 400 ? 'auto' : WIDTH * 8 / 100, borderRadius: "20px", marginTop: HEIGHT * 2 / 100, paddingTop: 2.9, paddingBottom: 2.9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography style={{ color: 'white', fontSize: 11, fontWeight: '500' }}>{"Track Now -->"}</Typography>
                                        </Box>
                                    </Box>
                                    <Box
                                        component="img"
                                        src={require('../../../assets/Home/tracks.jpg')}
                                        style={{ height: HEIGHT * 23 / 100, width: WIDTH < 400 ? 'auto' : WIDTH * 13 / 100 }}>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </>
            </Box>
            <Footer />
        </>
    );
};

export default HomePage;