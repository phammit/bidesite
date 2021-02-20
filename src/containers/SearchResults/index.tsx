import React, { FC } from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImgCard from '../../components/SearchResultCard';
import GridList from '@material-ui/core/GridList';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridListTile from '@material-ui/core/GridListTile';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { green } from '@material-ui/core/colors';

//import DataJson from '/staticdata/listingformat.json';
//const newlistingData = listingData.data;

//styles section
const useStyles = makeStyles((theme: Theme) => ({
        leftspacing: {
            //padding: "10px",
        },
        rightspacing: {
            //padding: "5px",
            //paddingRight: "10px",
        },
        lefttoolheading: {
            fontSize: 12,
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            //flexBasis: '33.33%',
            flexBasis: 'auto',
            flexShrink: 0,
            //display: 'inline-block',
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
            //display: 'inline-block',
        },
    })
)

export interface someProps {}

const SearchResults: FC<someProps> = ({}) => {
    const classes = useStyles();
    //code from material ui accordion 
    const [expanded, setExpanded] = React.useState<string | false>(false);
    //for accordion
    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    //for checkbox
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
        checkedE: true,
    });
    //for checkbox function
    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const GreenCheckbox = withStyles({
        root: {
          color: green[400],
          '&$checked': {
            color: green[600],
          },
        },
        checked: {},
      })((props: CheckboxProps) => <Checkbox color="default" {...props} />);

    return(
            <Grid container spacing={1}>
                <Grid item xs={1} sm={2} md={2} lg={2} xl={2} className={classes.leftspacing}>
                    <h4 className={classes.lefttoolheading}>Search Results Filter Section</h4>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading} display='block'>General settings</Typography>  
                        </AccordionSummary>
                        <AccordionDetails>
                        <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedA} onChange={handleCheck} name="checkedA" />}
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedB}
                                            onChange={handleCheck}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Primary"
                                />
                                <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
                                <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
                                <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedD}
                                            onChange={handleCheck}
                                            name="checkedF"
                                            indeterminate
                                        />
                                    }
                                    label="Indeterminate"
                                />
                                <FormControlLabel
                                    control={<GreenCheckbox checked={state.checkedD} onChange={handleCheck} name="checkedD" />}
                                    label="Custom color"
                                />
                                <FormControlLabel
                                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                                    label="Custom icon"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            name="checkedI"
                                        />
                                    }
                                    label="Custom size"
                                />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={classes.heading}>Users</Typography>
                            <Typography className={classes.secondaryHeading}>
                                You are currently not an owner
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                diam eros in elit. Pellentesque convallis laoreet laoreet.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>Advanced settings</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Personal data</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item xs={11} sm={10} md={10} lg={10} xl={10} className={classes.rightspacing}>
                    <h4>Search Results Items List</h4>
                    <Grid container spacing={1}>
                        
                            {listingData.data.map((m)=> {
                                    return (
                                        <Grid item xs={3} id={m.id}>
                                        <ImgCard title={m.title}
                                            price={m.price}
                                            name={m.sellerName}
                                            image={m.images[0].thumbnail}
                                            id={m.id}
                                        />
                                        </Grid>
                                    );
                                }
                            )}
                        
                    </Grid>
                </Grid>
            </Grid>
        
    )
} 

export default SearchResults;


const listingData = 
{
  "data":
            [
                {
                    "id": "EIAK1KDI3DKASI38572DKFIE",
                    "version": "0.1",
                    "creatingDate": "February 10, 2021",
                    "listingDate": "February 11, 2021",
                    "listingType": "escrow",
                    "listingFormat": "fixed price",
                    "allowOfferPrice": true,
                    "allowBuyerSuggestedEscrow": true,
                    "acceptableEscrows": ["agent001", "agent002", "agent133"],
                    "title": "listing display name",
                    "description": "ibso fact etc. List's long description",
                    "images": [ 
                    {
                        "thumbnail": "http://localhost:3000/images/miniMiner.jpg",
                        "image": "http://localhost:3000/images/miniMiner.jpg"
                    }, 
                    {
                        "thumbnail": "http://localhost:3000/images/miniMiner.jpg",
                        "image": "http://localhost:3000/images/miniMiner.jpg"
                    }],
                    "price": 199.99,
                    "priceDrop": 10.00,
                    "baseCurrency": "USD",
                    "quantityAvail": 4,
                    "condition": "new",
                    "sellerId": "10000001",
                    "sellerName": "NumberOneSeller",
                    "paymentTypes": ["paypal", "venmo", "square cash", "wechat"],
                    "paymentTypesCrypto": ["btc", "ltc", "eth", "xrp"],
                    "itemLocation": {
                    "city": "Sachse",
                    "province": "TX",
                    "country": "USA"
                    }  
                },
                {
                "id": "EIAK1KDI3DKASI38572DKFIA",
                "version": "0.1",
                "creatingDate": "February 10, 2021",
                "listingDate": "February 11, 2021",
                "listingType": "escrow",
                "listingFormat": "fixed price",
                "allowOfferPrice": true,
                "allowBuyerSuggestedEscrow": true,
                "acceptableEscrows": ["agent001", "agent002", "agent133"],
                "title": "listing display name",
                "description": "ibso fact etc. List's long description",
                "images": [ 
                    {
                    "thumbnail": "http://localhost:3000/images/bitcoin.jpg",
                    "image": "http://localhost:3000/images/bitcoin.jpg"
                    }, 
                    {
                    "thumbnail": "http://localhost:3000/images/coolGraphicsCard.jpg",
                    "image": "http://localhost:3000/images/coolGraphicsCard.jpg"
                    }],
                "price": 99.99,
                "priceDrop": 10.00,
                "baseCurrency": "USD",
                "quantityAvail": 4,
                "condition": "new",
                "sellerId": "10000001",
                "sellerName": "MasterZ",
                "paymentTypes": ["paypal", "venmo", "square cash", "wechat"],
                "paymentTypesCrypto": ["btc", "ltc", "eth", "xrp"],
                "itemLocation": {
                    "city": "Sachse",
                    "province": "TX",
                    "country": "USA"
                }
                },
                {
                "id": "EIAK1KDI3DKASI38572DKFIA",
                "version": "0.1",
                "creatingDate": "February 10, 2021",
                "listingDate": "February 11, 2021",
                "listingType": "escrow",
                "listingFormat": "fixed price",
                "allowOfferPrice": true,
                "allowBuyerSuggestedEscrow": true,
                "acceptableEscrows": ["agent001", "agent002", "agent133"],
                "title": "listing display name",
                "description": "ibso fact etc. List's long description",
                "images": [ 
                    {
                    "thumbnail": "http://localhost:3000/images/miniWallet.jpg",
                    "image": "http://localhost:3000/images/miniWallet.jpg"
                    }, 
                    {
                    "thumbnail": "http://localhost:3000/images/miniWallet.jpg",
                    "image": "http://localhost:3000/images/miniWallet.jpg"
                    }],
                "price": 48.06,
                "priceDrop": 10.00,
                "baseCurrency": "USD",
                "quantityAvail": 4,
                "condition": "new",
                "sellerId": "10000001",
                "sellerName": "JustAnotherAseller",
                "paymentTypes": ["paypal", "venmo", "square cash", "wechat"],
                "paymentTypesCrypto": ["btc", "ltc", "eth", "xrp"],
                "itemLocation": {
                    "city": "Sachse",
                    "province": "TX",
                    "country": "USA"
                }
                },
                {
                "id": "EIAK1KDI3DKASI38572DKFEB",
                "version": "0.1",
                "creatingDate": "February 10, 2021",
                "listingDate": "February 11, 2021",
                "listingType": "escrow",
                "listingFormat": "fixed price",
                "allowOfferPrice": true,
                "allowBuyerSuggestedEscrow": true,
                "acceptableEscrows": ["agent001", "agent002", "agent133"],
                "title": "listing display name",
                "description": "ibso fact etc. List's long description",
                "images": [ 
                    {
                    "thumbnail": "http://localhost:3000/images/redScooter.jpg",
                    "image": "http://localhost:3000/images/redScooter.jpg"
                    }, 
                    {
                    "thumbnail": "http://localhost:3000/images/redScooter.jpg",
                    "image": "http://localhost:3000/images/redScooter.jpg"
                    }],
                "price": 56.00,
                "priceDrop": 10.00,
                "baseCurrency": "USD",
                "quantityAvail": 4,
                "condition": "new",
                "sellerId": "10000001",
                "sellerName": "BestBuyCenter",
                "paymentTypes": ["paypal", "venmo", "square cash", "wechat"],
                "paymentTypesCrypto": ["btc", "ltc", "eth", "xrp"],
                "itemLocation": {
                    "city": "Sachse",
                    "province": "TX",
                    "country": "USA"
                }
                },
                {
                "id": "EIAK1KDI3DKASI38572DKFUI",
                "version": "0.1",
                "creatingDate": "February 10, 2021",
                "listingDate": "February 11, 2021",
                "listingType": "escrow",
                "listingFormat": "fixed price",
                "allowOfferPrice": true,
                "allowBuyerSuggestedEscrow": true,
                "acceptableEscrows": ["agent001", "agent002", "agent133"],
                "title": "listing display name",
                "description": "ibso fact etc. List's long description",
                "images": [ 
                    {
                    "thumbnail": "http://localhost:3000/images/RTX2080.jpg",
                    "image": "http://localhost:3000/images/RTX2080.jpg"
                    }, 
                    {
                    "thumbnail": "http://localhost:3000/images/RTX2080.jpg",
                    "image": "http://localhost:3000/images/RTX2080.jpg"
                    }],
                "price": 599.00,
                "priceDrop": 10.00,
                "baseCurrency": "USD",
                "quantityAvail": 4,
                "condition": "new",
                "sellerId": "10000001",
                "sellerName": "UpCycler",
                "paymentTypes": ["paypal", "venmo", "square cash", "wechat"],
                "paymentTypesCrypto": ["btc", "ltc", "eth", "xrp"],
                "itemLocation": {
                    "city": "Sachse",
                    "province": "TX",
                    "country": "USA"
                }
                },
                {
                "id": "EIAK1KDI3DKASI38572DKFPL",
                "version": "0.1",
                "creatingDate": "February 10, 2021",
                "listingDate": "February 11, 2021",
                "listingType": "escrow",
                "listingFormat": "fixed price",
                "allowOfferPrice": true,
                "allowBuyerSuggestedEscrow": true,
                "acceptableEscrows": ["agent001", "agent002", "agent133"],
                "title": "listing display name",
                "description": "ibso fact etc. List's long description",
                "images": [ 
                    {
                    "thumbnail": "http://localhost:3000/images/scateboard.jpg",
                    "image": "http://localhost:3000/images/scateboard.jpg"
                    }, 
                    {
                    "thumbnail": "http://localhost:3000/images/scateboard.jpg",
                    "image": "http://localhost:3000/images/scateboard.jpg"
                    }],
                "price": 129.85,
                "priceDrop": 10.00,
                "baseCurrency": "USD",
                "quantityAvail": 4,
                "condition": "new",
                "sellerId": "10000001",
                "sellerName": "CryptoManiac",
                "paymentTypes": ["paypal", "venmo", "square cash", "wechat"],
                "paymentTypesCrypto": ["btc", "ltc", "eth", "xrp"],
                "itemLocation": {
                    "city": "Sachse",
                    "province": "TX",
                    "country": "USA"
                }
                },
                {
                "id": "EIAK1KDI3DKASI38572DKFRD",
                "version": "0.1",
                "creatingDate": "February 10, 2021",
                "listingDate": "February 11, 2021",
                "listingType": "escrow",
                "listingFormat": "fixed price",
                "allowOfferPrice": true,
                "allowBuyerSuggestedEscrow": true,
                "acceptableEscrows": ["agent001", "agent002", "agent133"],
                "title": "listing display name",
                "description": "ibso fact etc. List's long description",
                "images": [ 
                    {
                    "thumbnail": "http://localhost:3000/images/rig.jpg",
                    "image": "http://localhost:3000/images/rig.jpg"
                    }, 
                    {
                    "thumbnail": "http://localhost:3000/images/rig.jpg",
                    "image": "http://localhost:3000/images/rig.jpg"
                    }],
                "price": 69.99,
                "priceDrop": 10.00,
                "baseCurrency": "USD",
                "quantityAvail": 4,
                "condition": "new",
                "sellerId": "10000001",
                "sellerName": "MakeMoney",
                "paymentTypes": ["paypal", "venmo", "square cash", "wechat"],
                "paymentTypesCrypto": ["btc", "ltc", "eth", "xrp"],
                "itemLocation": {
                    "city": "Sachse",
                    "province": "TX",
                    "country": "USA"
                }
                }
            ]
}

const newlistingData = listingData.data;


/**
 <Grid item xs={11} sm={10} md={10} lg={10} xl={10} className={classes.rightspacing}>
                    <h4>Search Results Items List</h4>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <ImgCard/>
                        </Grid>
                        <Grid item xs={4}>
                            <ImgCard/>
                        </Grid>
                        <Grid item xs={4}>
                            <ImgCard/>
                        </Grid>
                        <Grid item>
                            <ImgCard/>
                        </Grid>
                    </Grid>
                </Grid>
 */