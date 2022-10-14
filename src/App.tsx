import * as React from "react"
import { ChakraProvider, Box, Grid, theme, CircularProgress, Center } from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import CardItem from './components/CardItem'
import { getItems } from './services/itemsService'
import IItem from './interface/IItem'

const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [cardItems, setCardItems] = React.useState<IItem[]|[]>([]);
  React.useEffect(() => {
    fetchDataFromApi();
  }, [])

  const fetchDataFromApi = () => {
    setIsLoading(true);
    getItems()
      .then((response) => {
        setCardItems(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  if (isLoading) {
    return (
      <Center h='100vh'>
        <CircularProgress isIndeterminate size='100px' thickness='4px' />
      </Center>
    )
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Grid my={10} templateColumns='repeat(3, 1fr)' gap={6}>
            {cardItems.map((item: IItem) => (<CardItem item={item} key={item.id.toString()} />))}
          </Grid>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export default App;