import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useDiv1Cb() {
	const onClick = useCallback(callbackFactory("Div1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useInput1Cb() {
	const onChange = useCallback(callbackFactory("Input1", "Home", "/", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "value"
      ]
    }
  ]
}), [])
	const onPressEnter = useCallback(callbackFactory("Input1", "Home", "/", "onPressEnter", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onChange,onPressEnter }
}
export function useDiv2Cb() {
	const onClick = useCallback(callbackFactory("Div2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useInput2Cb() {
	const onChange = useCallback(callbackFactory("Input2", "Home", "/", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "value"
      ]
    }
  ]
}), [])
	const onPressEnter = useCallback(callbackFactory("Input2", "Home", "/", "onPressEnter", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onChange,onPressEnter }
}