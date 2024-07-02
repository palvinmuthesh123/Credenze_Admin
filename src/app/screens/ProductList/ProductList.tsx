import React, { useEffect, useRef, useState } from 'react';
import { BestSeller, category, DealBox } from '../../data/raw';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Rating, Select, SelectChangeEvent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './Product.css'
import Checkbox from '@mui/material/Checkbox';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilterSidebar from '../../components/filter/filter';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useNavigate } from 'react-router-dom';

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const useStyles = makeStyles({
    mainPart: {
        // paddingHorizontal: WIDTH / 100 * 5,
        backgroundColor: 'transparent',
        width: WIDTH*90/100,
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
        width: WIDTH < 400 ? WIDTH*45/100 : WIDTH / 100 * 15,
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
        fontSize: 13,
        fontWeight: '600'
        // fontFamily: FAMILY.SansProSemibold
    },
    crsText: {
        color: '#7A7A7A',
        fontSize: 13,
        // fontFamily: FAMILY.SansProRegular,
        marginLeft: WIDTH / 100 * 0.5,
        marginRight: WIDTH /100 * 1,
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

const ProductListPage = () => {
    const styles = useStyles();
    const history = useNavigate();
    const [data, setData] = useState(BestSeller.concat(BestSeller))
    const [sortBy, setSortBy] = React.useState<string>('Featured');
    const [itemsFound, setItemsFound] = React.useState<number>(92);

    const ProductCard: React.FC<any> = () => {
        return (
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
                    style={{ height: HEIGHT / 100 * 18, alignItems: "center", justifyContent: "center", marginTop: HEIGHT / 100 * 1, marginBottom: HEIGHT / 100 * 1, width: '100%' }}>
                    <Box
                        component="img"
                        // resizeMode='contain'
                        style={{ width: '80%', height: HEIGHT * 18 / 100, }}
                        src={require('../../../assets/Home/Cctv.png')} />
                </Box>
                <label className={styles.bestText1}>Category</label>
                <Box style={{ }}>
                    <label className={styles.bestText}>2 MP Build-in Mic Fixed Bullet Network Camera</label>
                </Box>
                <Box style={{ flexDirection: 'row', display: 'flex', alignItems: "center"}}>
                    <Box style={{ flexDirection: "row", alignItems: "center", marginTop: HEIGHT * 2 / 100, display: 'flex' }}>
                        <label className={styles.orgText}>₹2000</label>
                        <label className={styles.crsText}>₹5000</label>
                        <Box sx={{ '& .MuiRating-icon': { fontSize: 10 } }}>
                            <Rating value={4} readOnly size={'small'} />
                        </Box>
                        <Box style={{ flexDirection: "row", alignItems: "center" }}>
                            <label className={styles.starCount}>(4.5)</label>
                        </Box>
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
        );
    };

    const handleSortChange = (event: SelectChangeEvent<string>) => {
        setSortBy(event.target.value as string);
    };

    return (
        <>
            <Header />
            <Box
                flexDirection={'row'}
                style={{ backgroundColor: '#fbfbfb', width: WIDTH*90/100, marginLeft: WIDTH*4.5/100,marginBottom: HEIGHT*6/100 }}>
                <>
                    <Box className={styles.mainPart}>
                    <Grid container spacing={4}>
                    <Grid item xs={12} lg={3.3}>
                        <FilterSidebar/>
                    </Grid>
                    <Grid item xs={12} lg={8.7}>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2, border: '1px solid #e0e0e0', borderRadius: 1, backgroundColor:"#F7F7F8", marginBottom: HEIGHT*0.5/100 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button variant="contained" color="error" sx={{ minWidth: '40px', padding: 0 }} onClick={()=>{history('/productlist')}}>
                                <ViewModuleIcon />
                            </Button>
                            <Button variant="outlined" color="error" sx={{ minWidth: '40px', marginLeft: 1, padding: 0 }} onClick={()=>{history('/productlist1')}}>
                                <ViewListIcon />
                            </Button>
                            <Typography sx={{ marginLeft: 2 }}>We found {itemsFound} items for you!</Typography>
                        </Box>
                        <FormControl variant="outlined" sx={{ minWidth: 150 }}>
                            <InputLabel>Sort By</InputLabel>
                            <Select value={sortBy} onChange={handleSortChange} label="Sort By">
                            <MenuItem value="Featured">Featured</MenuItem>
                            <MenuItem value="Price: Low to High">Price: Low to High</MenuItem>
                            <MenuItem value="Price: High to Low">Price: High to Low</MenuItem>
                            <MenuItem value="Newest">Newest</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                        <Grid container spacing={4}>
                        {data.map((product, index) => (
                            <Grid item key={index} xs={6} sm={6} md={4} lg={3} xl={3}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>
                    </Grid>
                    
                    </Box>
                </>
            </Box>
            <Footer/>
        </>
    );
};

export default ProductListPage;