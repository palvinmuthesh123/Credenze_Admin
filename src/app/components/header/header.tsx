import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Grid, Button, InputBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './header.css';
import { Category, Search } from "@mui/icons-material";
import { GET_CATEGORY_HIERARCHY, GET_PRODUCT_BY_ID, GET_PRODUCT_SUGGESTIONS, SEARCH_PRODUCTS_BY_CATEGORY } from '../../redux/apis';
import { url } from 'inspector';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

type DropdownMenu = string | null;

const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;

type OptionType = {
  id: number;
  name: string;
  type: string;
};

const CustomInput = styled(InputBase)(({ theme }) => ({
  // padding: theme.spacing(1),
  // border: '1px solid #ced4da',
  // borderRadius: 4,
  // backgroundColor: theme.palette.background.paper,
}));

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, DropdownMenu>>({});
  const [data, setData] = useState<any[]>([]);
  const [options, setOptions] = useState<OptionType[]>([]);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getContents();
  }, []);

  const getContents = async () => {
    try {
      const response = await fetch(GET_CATEGORY_HIERARCHY);
      const data = await response.json();
      setData([{ categoryName: "All Categories", subCategories: data }]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMouseEnter = (level: number, menuName: DropdownMenu) => {
    setOpenDropdowns((prev) => ({ ...prev, [level]: menuName }));
  };

  const handleMouseLeave = (level: number) => {
    setOpenDropdowns((prev) => ({ ...prev, [level]: null }));
  };

  const handleNavigation = () => {
    navigate('/usercart');
  };

  const handleClick = async(category: any) => {
    console.log(category);
    try {
      if(category && category.categoryId) {
        const response = await fetch(`${SEARCH_PRODUCTS_BY_CATEGORY}${category.categoryId}`);
        const data = await response.json();
        console.log(data, "DDDDDDDDDDDDDDDD")
        navigate('/productlist', { state: data.pageableProducts.content })
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderMenu = (menu: any, level = 0) => {
    return (
      <ul className={level !== 0 ? `dropdown level-${level}` : 'change'} key={level}>
        {menu.map((item: any) => (
          <li
            style={level==0 ? {backgroundColor: "#f5f5f5"} : {}}
            key={item.categoryId}
            onMouseEnter={() => handleMouseEnter(level, item.categoryName)}
            onMouseLeave={() => handleMouseLeave(level)}
            onClick={() => handleClick(item)}
          >
            {level!=0 ? <img style={{ marginRight: '8px' }} src={item && item.categoryImageUrl ? {url: item.categoryImageUrl} : require('../../../assets/camer.png')}/> : null }
            {item.categoryName}
            {openDropdowns[level] === item.categoryName && item.subCategories.length > 0 &&
              renderMenu(item.subCategories, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  const getSearch = async (val: any) => {
    try {
        const response = await fetch(`${GET_PRODUCT_SUGGESTIONS}${val}`);
        
        if (!response.ok) {
            console.log(`Error: ${response.status} - ${response.statusText}`);
            setOptions([]);
            return;
        }

        const data = await response.json();
        console.log(data, "SEARCH.......................");

        if (Array.isArray(data)) {
            setOptions(data);
        } else {
            setOptions([]);
        }
    } catch (error) {
        console.error("Fetch error:", error);
        setOptions([]);
    }
  };

  const handleChange = async (event: any, newValue: OptionType | null | any) => {
    setValue(newValue);
    if (newValue && newValue.type=="Category") {
      const response = await fetch(`${SEARCH_PRODUCTS_BY_CATEGORY}${newValue.id}`);
      const data = await response.json()
      console.log(data, "DDDDDDDDDDDDDDDD")
      navigate('/productlist', { state: data.pageableProducts.content })
    }
    else if (newValue && newValue.type=="Product") {
      const response = await fetch(`${GET_PRODUCT_BY_ID}${newValue.id}`);
      const data = await response.json()
      console.log(data, "DDDDDDDDDDDDDDDD")
      navigate('/productdetail', { state: data })
    }
  };

  return (
    <AppBar position="static" sx={{ mb: 4, backgroundColor: 'white' }}>
      <Toolbar>
        <Grid container spacing={2} alignItems={'center'}>
          
          <Grid item xs={12} lg={1.5}>
            <Box
              onClick={() => navigate('/')}
              component="img"
              style={{
                width: WIDTH < 400 ? 'auto' : WIDTH * 8 / 100,
                marginTop: HEIGHT * 1.5 / 100,
              }}
              src={require('../../../assets/Home/Credenze.png')}
            />
          </Grid>

          <Grid item xs={12} lg={5.3}>
            <Box sx={styles.container}>
              <Button sx={styles.searchButton}>
                <Search sx={styles.searchIcon} />
              </Button>
              <div className="menu">
                {renderMenu(data)}
              </div>
              <Autocomplete
                value={value}
                sx={styles.input}
                onChange={handleChange}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                options={options ? options : []}
                getOptionLabel={(option) => option ? option.name : ""} // Use the "name" property for display
                renderInput={(params) => (
                    <InputBase
                      fullWidth
                      ref={params.InputProps.ref}
                      inputProps={params.inputProps}
                      placeholder="Search for Products & Categories"
                      sx={styles.input}
                      onChange={(event)=>{getSearch(event.target.value)}}
                    />
                )}
                PaperComponent={({ children }) => (
                    <Paper elevation={3} sx={{ marginTop: 1 }}>{children}</Paper>
                )}
              />

              <Button sx={styles.searchButton}>
                <Search sx={styles.searchIcon} />
              </Button>
            </Box>
          </Grid>

          <Grid item xs={3} lg={1.7}>
            <Box
              style={{
                backgroundColor: '#F8F8F8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 15,
                paddingBottom: 15,
                width: WIDTH < 400 ? 'auto' : WIDTH * 12 / 100,
                height: HEIGHT * 1.6 / 100,
                marginTop: HEIGHT * 1 / 100,
                alignSelf: 'flex-end'
              }}
            >
              <Box
                component="img"
                style={{
                  width: WIDTH < 400 ? 'auto' : WIDTH * 1 / 100,
                  height: HEIGHT * 2 / 100,
                  marginRight: WIDTH * 0.5 / 100,
                }}
                src={require('../../../assets/Home/person.png')}
              />
              <Typography style={{ color: 'black' }} variant="body2">
                Installation Service
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3} lg={1.3}>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                width: WIDTH < 400 ? 'auto' : WIDTH * 10 / 100,
                marginLeft: WIDTH * 1 / 100,
              }}
            >
              <Box
                component="img"
                style={{
                  width: WIDTH < 400 ? 'auto' : WIDTH * 1 / 100,
                  height: HEIGHT * 2 / 100,
                  marginRight: WIDTH * 0.5 / 100,
                }}
                src={require('../../../assets/Home/Frame.png')}
              />
              <Typography style={{ color: 'black' }} variant="body2">
                Track Order
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3} lg={0.8}>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                width: WIDTH < 400 ? 'auto' : WIDTH * 5 / 100,
              }}
            >
              <Box
                onClick={() => navigate('/otpverification')}
                component="img"
                style={{
                  width: WIDTH < 400 ? 'auto' : WIDTH * 1 / 100,
                  height: HEIGHT * 2 / 100,
                  marginRight: WIDTH * 0.5 / 100,
                }}
                src={require('../../../assets/Home/user.png')}
              />
              <Typography style={{ color: 'black' }} variant="body1">
                Login
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3} lg={0.8}>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                width: WIDTH < 400 ? 'auto' : WIDTH * 5 / 100,
              }}
            >
              <Box
                onClick={() => handleNavigation()}
                component="img"
                style={{
                  width: WIDTH < 400 ? 'auto' : WIDTH * 1 / 100,
                  height: HEIGHT * 2 / 100,
                  marginRight: WIDTH * 0.5 / 100,
                }}
                src={require('../../../assets/Home/Bucket.png')}
              />
              <Typography style={{ color: 'black' }} variant="body1">
                Cart
              </Typography>
            </Box>
          </Grid>
          
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    border: "1px solid #ddd",
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#f5f5f5",
  },
  categoriesButton: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderRight: "1px solid #ddd",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    color: "#000000",
    textTransform: "none", // Ensures the text isn't all caps
    '&:hover': {
      backgroundColor: '#f0f0f0', // Adds a subtle hover effect
    }
  },
  icon: {
    marginRight: "8px",
  },
  arrow: {
    marginLeft: "4px",
    fontSize: "12px",
  },
  input: {
    flex: 1,
    paddingLeft: "10px",
    border: "none",
    outline: "none",
    fontSize: "14px",
    backgroundColor: "transparent",
  },
  searchButton: {
    padding: "10px",
    border: "none",
    backgroundColor: "#ff5722",
    color: "#ffffff",
    cursor: "pointer",
    // height: "6vh",
    borderRadius: "0 4px 4px 0",
    '&:hover': {
      backgroundColor: '#e64a19', // Adds a hover effect for the button
    }
  },
  searchIcon: {
    fontSize: "18px",
  },
};

export default Header;