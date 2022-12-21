import {
  DetailedHTMLProps,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { FieldError } from 'react-hook-form'
import { InputError, InputWrapper } from './styles'

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error: FieldError | undefined
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, ...rest },
  ref,
) => {
  return (
    <>
      {/* TODO: IDK How to type it correctly yet */}
      <InputWrapper error={!!error?.message} ref={ref as any} {...rest} />
      <InputError>{error?.message}</InputError>
    </>
  )
}

export const Input = forwardRef(InputBase)
