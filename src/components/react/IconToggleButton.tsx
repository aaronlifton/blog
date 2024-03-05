import React, { forwardRef, useEffect } from "react";
import IconButtton from "./IconButton";
import IconButton from "./IconButton";

// Raise a type error when a prop might fail shallow equality checks
type PrimitiveProps = { [key: string]: string|number|boolean|null|undefined }

declare module "react" {
  function forwardRef<T, P extends PrimitiveProps>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null
  ): (props: P & React.RefAttributes<T>) => React.ReactNode | null;
}

interface Props<T> {
  onStateLabel: string
  offStateLabel: string
  state: T
  className?: string
  useLocalStorage?: boolean
  storageKey?: string
}
function IconToggleButton<T extends Props<T>>(
  {onStateLabel, offStateLabel, className: providedClassName, useLocalStorage, storageKey, ...rest}: T,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  console.log({"this": this})
  console.log({ref})
  // if (useLocalStorage) {
  //   if (!storageKey || storageKey === "") {
  //     throw new Error("storageKey is required when useLocalStorage is true")
  //   }
  //   localStorage.setItem(storageKey, state);
  // }
  useEffect(() => {
    const mo = new MutationObserver((mutationsList, observer) => {
      // Use traditional 'for loops' for IE 11
      for (const mutation of mutationsList) {
        console.log({mutation})
          // if (mutation.type === 'attributes') {
          //     if(myDivAttr == "type-1"){
          //       typeOneFunction();
          //      }
          //      else if(myDivAttr == "type-2"){
          //        typeTwoFunction();
          //      }
          // }
      }
    })
    mo.observe(ref.current, { attributes: true, attributeFilter: [ 'data-state'] });
  }, [ref.current])

  return (
    <IconButton className={providedClassName} {...rest} ref={ref} />
  )
}

export default IconToggleButton;