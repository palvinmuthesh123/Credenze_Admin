import React, { useEffect, useRef, useState } from 'react';
import { BestSeller, category, DealBox } from '../../data/raw';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Rating, Select, SelectChangeEvent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './Product.css'
import Checkbox from '@mui/material/Checkbox';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilterSidebar from '../../components/filter/filter';
import { useNavigate, useLocation } from 'react-router-dom';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

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
        width: WIDTH < 400 ? 'auto' : WIDTH / 100 * 60,
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
        width: WIDTH < 400 ? 170 : '18%',
        backgroundColor: "#278BED",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        display: 'flex'
    },
    buyText: {
        fontSize: 12,
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
    const location = useLocation();
    const datas = location.state;
    const [data, setData] = useState(BestSeller)
    const [sortBy, setSortBy] = React.useState<string>('Featured');
    const [itemsFound, setItemsFound] = React.useState<number>(92);
    
    const nav = () => {
        console.log("OOOOOOOOOOOOOOO")
        history('/productdetail')
    }

    useEffect(()=> {
        console.log(datas, "PASS........................")
    },[])

    const ProductCard: React.FC<any> = (items) => {
        var item = items.product
        return (
            <Box
                onClick={nav}
                sx={{
                    boxShadow: 2,
                }}
                className={styles.BestBox}>
                <Grid container spacing={4}>
                <Grid item xs={3.5}>
                    <Box
                        style={{ height: HEIGHT / 100 * 25, alignItems: "center", justifyContent: "center", marginTop: HEIGHT / 100 * 1, marginBottom: HEIGHT / 100 * 1, width: '90%' }}>
                        <Box style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                            <Box component="img"
                                src={require('../../../assets/hot.png')} />
                        </Box>
                        <Box
                            component="img"
                            style={{ width: '80%', height: HEIGHT * 25 / 100, }}
                            src={require('../../../assets/Home/Cctv.png')} />
                    </Box>
                </Grid>
                <Grid item xs={8.5}>
                <Box style={{display:'flex', flexDirection: 'column'}}>
                <Box style={{}}>
                    <label className={styles.bestText}>{item.displayName ? item.displayName : "2 MP Build-in Mic Fixed Bullet Network Camera"}</label>
                </Box>
                <Box style={{ flexDirection: 'row', display: 'flex'}}>
                    <Box style={{ flexDirection: "row"}}>
                    {item.salePrice ? <label className={styles.orgText}>{item.salePrice}</label> : <label className={styles.orgText}>₹2000</label>}
                    {item.mrpPrice ? <label className={styles.crsText}>{item.mrpPrice}</label> : <label className={styles.crsText}>₹5000</label>}
                    </Box>
                </Box>
                <Typography style={{fontSize: 10, color:"#777777"}}>{item.shortDesc ? item.shortDesc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not on ly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not on ly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I"}</Typography>
                <Box style={{ flexDirection: "row", alignItems: "center", marginTop: HEIGHT / 100 * 1, width: '100%', display: 'flex' }}>
                    <Box style={{ flexDirection: "row",display: 'flex',alignItems: "center", width: WIDTH < 400 ? '100%' : '25%'}}>
                        <Checkbox name="antoine" {...label} />
                        <Typography style={{fontSize: 11}}>Compare</Typography>
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
                <Box style={{ flexDirection: "row", alignItems: "center", marginTop: HEIGHT / 100 * 1, width: '100%', display: 'flex' }}>
                    <Box className={styles.buyBtn}>
                    <Box component="img"
                        style={{marginRight: WIDTH*0.7/100}}
                        src={require('../../../assets/Home/buycart.png')} />
                        <label className={styles.buyText}>BUY NOW</label>
                    </Box>
                    <Box style={{display: "flex", flexDirection: "row", width: WIDTH < 400 ? 200 : '' }}>
                        <Box component="img"
                            style={{height: HEIGHT*2/100, marginLeft: WIDTH*2/100}}
                            src={require('../../../assets/Home/addcart.png')} />
                        <label style={{color: "#898989", fontSize: 12, marginLeft: WIDTH*0.5/100, fontWeight: "600"}}>ADD TO CART</label>
                    </Box>
                    <Box style={{display: "flex", flexDirection: "row"}}>
                        <Box component="img"
                        style={{height: HEIGHT*2/100, marginLeft: WIDTH*2/100}}
                            src={require('../../../assets/Home/Like.png')} />
                        <label style={{color: "#898989", fontSize: 12, marginLeft: WIDTH*0.5/100, fontWeight: "600"}}>ADD TO FAVORITE</label>
                    </Box>
                </Box>
                </Box>
                </Grid>
                </Grid>
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
                        <Box sx={{ display: 'flex', alignItems: 'center',}}>
                            <Button variant="outlined" color="error" sx={{ minWidth: '40px', padding: 0 }} onClick={()=>{history('/productlist', { state: datas })}}>
                                <ViewModuleIcon />
                            </Button>
                            <Button variant="contained" color="error" sx={{ minWidth: '40px', marginLeft: 1, padding: 0 }} onClick={()=>{history('/productlist1', { state: datas })}}>
                                <ViewListIcon />
                            </Button>
                            <Typography sx={{ marginLeft: 2, display: "block" }}>We found {itemsFound} items for you!</Typography>
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
                    {datas && datas.map((product: any, index: React.Key | null | undefined) => (
                        <Grid item key={index} xs={12} sm={12} md={12} lg={12} xl={12}>
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