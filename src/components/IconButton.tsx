import * as React from "react"
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentPropsWithRef<'button'> {
  variant?: string
}
const IconButton = React.forwardRef<HTMLButtonElement, Props>(({variant, className: providedClassName, ...rest}, ref) => {
  variant ||= "rounded-full"
  const className = React.useMemo(() => {
     return twMerge(
       clsx(
         'bg-surface',
         'hover:bg-hover',
         'text-on-background',
         'disabled:bg-disabled',
         'disabled:text-on-disabled',
         'disabled:hover:cursor-not-allowed',
         'disabled:hover:bg-disabled',
         'hover:text-primary',
         'transition-colors',
         'duration-300',
         {
           'min-w-[40px] h-[40px] flex justify-center items-center rounded-full px-2':
             variant === 'rounded-full',
           'rounded border border-divider p-1 shadow-sm shadow-shadow':
             variant === 'rounded',
         },
         providedClassName
       )
     )
  }, [variant, providedClassName])

   return (
     <button
       ref={ref as React.ForwardedRef<HTMLButtonElement>}
       type='button'
       {...rest}
       className={className}
     />
   )
})

export default IconButton
