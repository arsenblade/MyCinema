import { useRenderClient } from "@/hooks/useRenderClient"
import { TypeMaterialIconName } from "@/shared/types/icons.types"
import { FC } from "react"
import * as MaterialIcons from 'react-icons/md'

interface MaterialIconProps {
  name: TypeMaterialIconName
}

const MaterialIcon:FC<MaterialIconProps> = ({name}) => {
  const {isRenderClient} = useRenderClient()
  const IconComponent = MaterialIcons[name]; 
  if(isRenderClient) {
    return <IconComponent /> || <MaterialIcons.MdDragIndicator />
  }
  else {
    return null
  }
}

export default MaterialIcon