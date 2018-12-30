import React from 'react'
import { Text, View } from 'react-native'
import { Api } from 'src/services/api';
import { AppStyle } from '../../styles'
import { RestorisScreenProps } from './props'
import { RestorisScreenState } from './state'

@AppStyle.withThemeClass()
export class RestorisScreen extends React.Component<
  RestorisScreenProps,
  RestorisScreenState
> {
  constructor(props: RestorisScreenProps) {
    super(props)
    this.state = {
      restaurants:[]
    }
  }

  async componentDidMount(){
   const restaurants= await Api.loadRestaurants()
   this.setState({restaurants})
  }

  public render() {
    const { theme } = this.props as Required<RestorisScreenProps>
    const { restaurants }= this.state
    return (
      <View style={theme.styles.screenContainer}>
        <Text style={{color:theme.vars.colors.text}}>RestorisScreen</Text>

      </View>
    )
  }
}
