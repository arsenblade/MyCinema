import { TypeMaterialIconName } from "@/shared/types/icons.types"
import { FC } from "react"
import * as MaterialIcons from 'react-icons/md'

interface MaterialIconProps {
  name: TypeMaterialIconName
}

const MaterialIcon:FC<MaterialIconProps> = ({name}) => {

  const IconComponent = MaterialIcons[name]; 
  return (
    <IconComponent /> || <MaterialIcons.MdDragIndicator />
  )
}

export default MaterialIcon