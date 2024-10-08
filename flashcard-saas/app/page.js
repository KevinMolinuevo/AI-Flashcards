import { Container } from "@mui/material";
import {getStripe} from "@/utils/get-stripe"
import Image from "next/image";
import {AppBar, Toolbar, Typography, Button, Box, Grid, } from "@mui/material";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return ( 
  <Container>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{flexGrow: 1}}>
        Flashcard SaaS
      </Typography>
      <SignedOut>
        <Button color="inherit" href="/sign-in">Login</Button>
        <Button color="inherit" href="/sign-up">Sign Up</Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </Toolbar>
  </AppBar> 
  <Box sx={{textAlign: 'center', my: 4}}>
    <Typography variant="h2" component="h1" gutterBottom>
    Welcome to Flashcard SaaS
  </Typography>
  <Typography variant="h5" component="h2" gutterBottom>
    The easiest way to create flashcards from your text.
  </Typography>
  <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/generate">
    Get Started
  </Button>
  <Button variant="outlined" color="primary" sx={{mt: 2}}>
    Learn More
  </Button>
</Box>   
<Box sx={{my: 6}}>
  <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
  <Grid container spacing={4}>
    <Grid item xs = {12} md={4}>
    <Typography variant="h6"> Easy Input text</Typography>
    <Typography>
      {''}
      Simply input your text and let our software do the rest. 
    </Typography>
    </Grid>
    <Grid item xs = {12} md={4}>
    <Typography variant="h6">FlashCards could be saved</Typography>
    <Typography>
      {''}
      Next time you return we will be waiting. 
    </Typography>
    </Grid>
    <Grid item xs = {12} md={4}>
    <Typography variant="h6"> Any topic could be used</Typography>
    <Typography>
      {''}
      From math to science to a random book we make it all. 
    </Typography>
    </Grid>
  </Grid>
  
</Box>

<Box sx={{my: 6, textAlign: 'center'}}>
  <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
  <Grid container spacing={4} justifyContent="center">
  <Grid item xs = {12} md={4}>
    <Box sx ={{
      p: 3,
      border: '1px solid',
      borderColor:'grey.300',
      borderRadius: 2

    }}>
    <Typography variant="h6"> Basic</Typography>
    <Typography>
      {''}
      $5/month. Access to basic flashcards and limited storage
    </Typography>
    </Box>
    </Grid>
    <Grid item xs = {12} md={4}>
    <Box sx ={{
      p: 3,
      border: '1px solid',
      borderColor:'grey.300',
      borderRadius: 2

    }}>
    <Typography variant="h6"> Pro</Typography>
    <Typography>
    $10/month. 
      {''}
      Access to unlimited storage and flashcards
    </Typography>
    </Box>
    </Grid>
    
  </Grid>
</Box>
  </Container>)}
  
  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: { origin: 'http://localhost:3000' },
    })
    const checkoutSessionJson = await checkoutSession.json()
  
    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })
  
    if (error) {
      console.warn(error.message)
    }
  }
