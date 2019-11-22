/**
 *  Import the initializeDetailButtonEvents and bordercolorchange function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from './dialogs.js'
import borderColorChange from './asideBorder.js'
import { useFish } from './fishDataProvider.js'
import FishListComponent from './fishList.js'

// initializeDetailButtonEvents()
borderColorChange()
useFish()
FishListComponent()