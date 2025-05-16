import { Box, SxProps } from "@mui/material";
import React, { useEffect, useRef } from 'react';

export interface RemarkAutoLoopScrollProps {
  id: string | number
  text: string
  delay?: number
  animation?: number
  sx?: SxProps
  textSx?: SxProps
}

const RemarkAutoLoopScroll: React.FC<RemarkAutoLoopScrollProps> = (props) => {
  const { text, id, textSx, delay, animation, ...other } = props

  const timer = useRef<NodeJS.Timeout>()

  const onScroll = () => {
    const element = document.getElementById(`text-scroll-${id}`)

    if (element) {
      // 判断 element 出现是否出现在可视区域
      const rect = element.getBoundingClientRect()

      if (rect.top < window.innerHeight && rect.bottom > 0 && rect.right < window.innerWidth && rect.left > 0) {
        setTimeout(() => {
          const prev = document.getElementById(`text-scroll-prev-${id}`)
          const next = document.getElementById(`text-scroll-next-${id}`)

          if (prev && next) {
            prev.style.animation = `text-scroll-prev ${animation || 15000}ms linear infinite`
            next.style.animation = `text-scroll-next ${animation || 15000}ms linear infinite`
          }
        }, 2000)
      } else {
        const prev = document.getElementById(`text-scroll-prev-${id}`)
        const next = document.getElementById(`text-scroll-next-${id}`)

        if (prev && next) {
          prev.style.animation = 'none'
          next.style.animation = 'none'
        }
      }
    }
  }

  useEffect(() => {
    const prev = document.getElementById(`text-scroll-prev-${id}`)
    const next = document.getElementById(`text-scroll-next-${id}`)

    if (prev && next) {
      prev.style.animation = 'none'
      next.style.animation = 'none'
    }

    clearInterval(timer.current)
    timer.current = setInterval(() => {
      onScroll()
    }, delay || 2000);

    return () => {
      clearInterval(timer.current)
    }
  }, [text])

  return <Box {...other} id={`text-scroll-${id}`} sx={{
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    userSelect: 'none',
  }}>
    <Box id={`text-scroll-prev-${id}`} sx={{ ...textSx, minHeight: '100%' }}>
      {text}
    </Box>
    <Box id={`text-scroll-next-${id}`} sx={{ ...textSx, minHeight: '100%' }}>
      {text}
    </Box>
  </Box>
}

export default RemarkAutoLoopScroll