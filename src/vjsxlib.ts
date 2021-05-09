import './@types/vjsx.d'

const valueExists = (value: any): boolean =>{
  if(value===0) return true
  return !!value
}

Object.defineProperties(Element.prototype, {
  _vf: {
    value: {} as { [key: string]: Function[] & {value?: any} }
  },
  watch: {
    value: function(name: string, listener: (value: any)=>void){
      const valueField = this._vf[name]
      if(!valueField){
        this._vf[name] = [listener]
      }else{
        valueField.push(listener)
        if(valueExists(valueField.value)) listener(valueField.value)
      }
    }
  }
})


function useAttr<Obj extends Element & AdditionalElementProps, PropName extends string, AttrType>(target: Obj, propName: PropName, defaultValue: AttrType): asserts target is Obj & Record<PropName, AttrType>
{
  target._vf[propName] ??= []
  const vf = target._vf[propName]
  vf.value = defaultValue
  Object.defineProperty(target, propName, {
    get(): AttrType{
      return vf.value
    },
    set(value: AttrType){
      vf.value = value
      for(let i=vf.length;i--;) vf[i](value)
    }
  })
  target[propName] = defaultValue
}




export { useAttr }