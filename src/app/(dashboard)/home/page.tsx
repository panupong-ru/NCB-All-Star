'use client'

import { useState } from 'react'

import Image from 'next/image'

import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardHeader,
  InputAdornment,
  IconButton,
  MenuItem,
  FormHelperText,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button
} from '@mui/material'
import { toast } from 'react-toastify'

import { useForm, Controller } from 'react-hook-form'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import CustomTextField from '@/@core/components/mui/TextField'

type FormValues = {
  firstName: string
  lastName: string
  email: string
  password: string
  dob: Date | null | undefined
  select: string
  textarea: string
  radio: boolean
  checkbox: boolean
}

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [loaded, setLoaded] = useState<boolean>(false)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      loop: true,
      created() {
        setLoaded(true)
      }
    },
    [
      slider => {
        let mouseOver = false
        let timeout: number | ReturnType<typeof setTimeout>

        const clearNextTimeout = () => {
          clearTimeout(timeout as number)
        }

        const nextTimeout = () => {
          clearTimeout(timeout as number)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Hooks
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      dob: null,
      select: '',
      textarea: '',
      radio: false,
      checkbox: false
    }
  })

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const onSubmit = () => toast.success('Form Submitted')

  return (
    <>
      <Card>
        <CardContent className='flex flex-col text-center'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div ref={sliderRef} className='keen-slider'>
                <div className='keen-slider__slide'>
                  <Image
                    src='/images/promotion/1.jpg'
                    alt='swiper 1'
                    width={480}
                    height={600}
                    layout='responsive'
                    sizes='(max-width: 600p\x)'
                  />
                </div>
                <div className='keen-slider__slide'>
                  <Image
                    src='/images/promotion/2.png'
                    alt='swiper 2'
                    width={480}
                    height={600}
                    layout='responsive'
                    sizes='(max-width: 600px)'
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
              <Typography variant='h1' sx={{ m: 2 }}>
                โครงการประกัน เพื่อเกษตรกร คุ้มครองครบถ้วน การเสียชีวิตทุกรณี (ยกเว้นการฆ่าตัวตาย)
              </Typography>
              <Typography variant='body1' sx={{ ml: 2, mb: 3 }}>
                ประกันเพื่อเกษตรกร เป็นประกันสำหรับเกษตรกรทุกท่าน เพื่อความคุ้มครองที่มั่นใจในทุกเหตุการณ์ ไม่ว่าจะเป็น
              </Typography>
              <Typography variant='body1' sx={{ m: 2 }}>
                <span style={{ color: 'yellow' }}>➢</span> เสียชีวิตจากโรคทุกระดับ (รวมถึงค่าปลงศพ)
              </Typography>
              <Typography variant='body1' sx={{ m: 2 }}>
                <span style={{ color: 'yellow' }}>➢</span> เสียชีวิตจากการถูกฆ่าหรือทำร้ายร่างกาย
              </Typography>
              <Typography variant='body1' sx={{ m: 2 }}>
                <span style={{ color: 'yellow' }}>➢</span> เสียชีวิตในกรณีการก่อการร้าย
              </Typography>
              <Typography variant='body1' sx={{ m: 2 }}>
                <span style={{ color: 'yellow' }}>➢</span> เสียชีวิตจากอุบัติเหตุทั่วไป
              </Typography>
              <Typography variant='body1' sx={{ m: 2 }}>
                <span style={{ color: 'yellow' }}>➢</span> คุ้มครองในกรณีทุพพลภาพถาวร
              </Typography>
              <Typography variant='body1' sx={{ m: 2 }}>
                เราครอบคลุมทุกกรณี ด้วยวงเงินสูงสุดในทุกเหตุการณ์
                เพื่อให้เกษตรกรทุกคนสามารถประกันชีวิตและทรัพย์สินของตนเองและครอบครัวได้อย่างมั่นใจ
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ p: 0 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{}}>
                  <a href='https://line.me/R/ti/p/@995phpdt?oat_content=url' target='_blank' rel='noopener noreferrer'>
                    <Image
                      src='/images/promotion/คลิก-เพิ่มเพื่อนในไลน์.gif'
                      alt='swiper 2'
                      sizes='100vw'
                      style={{
                        width: '100%',
                        height: '100%',
                        maxHeight: '250px'
                      }}
                      width={10}
                      height={10}
                    />
                  </a>
                </Grid>
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid xs={6} md={5}>
                      <Image
                        src='/images/promotion/kbank.png'
                        alt='swiper 2'
                        sizes='100vw'
                        style={{
                          width: '100%',
                          height: '100%',
                          maxWidth: '150px',
                          maxHeight: '150px'
                        }}
                        width={100}
                        height={100}
                      />
                    </Grid>
                    <Grid xs={6} md={7} sx={{ textAlign: 'center' }}>
                      <Typography variant='h4' sx={{ m: 2 }}>
                        ธนาคารกสิกรไทย
                      </Typography>
                      <Typography variant='h5' sx={{ m: 2, mt: 3 }}>
                        เลขที่บัญชี : 1793834493
                      </Typography>
                      <Typography variant='h5' sx={{ m: 2, mt: 3 }}>
                        ชื่อบัญชี : บจก. เอ็น.ซี.บี.ออลสตาร์
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title='Basic' />
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name='firstName'
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomTextField
                          {...field}
                          fullWidth
                          label='First Name'
                          placeholder='John'
                          {...(errors.firstName && { error: true, helperText: 'This field is required.' })}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name='lastName'
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomTextField
                          {...field}
                          fullWidth
                          label='Last Name'
                          placeholder='Doe'
                          {...(errors.lastName && { error: true, helperText: 'This field is required.' })}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name='email'
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomTextField
                          {...field}
                          fullWidth
                          type='email'
                          label='Email'
                          placeholder='johndoe@gmail.com'
                          {...(errors.email && { error: true, helperText: 'This field is required.' })}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name='password'
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomTextField
                          {...field}
                          fullWidth
                          label='Password'
                          placeholder='············'
                          id='form-validation-basic-password'
                          type={isPasswordShown ? 'text' : 'password'}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position='end'>
                                <IconButton
                                  edge='end'
                                  onClick={handleClickShowPassword}
                                  onMouseDown={e => e.preventDefault()}
                                  aria-label='toggle password visibility'
                                >
                                  <i className={isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                                </IconButton>
                              </InputAdornment>
                            )
                          }}
                          {...(errors.password && { error: true, helperText: 'This field is required.' })}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name='select'
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomTextField select fullWidth label='Country' {...field} error={Boolean(errors.select)}>
                          <MenuItem value=''>Select Country</MenuItem>
                          <MenuItem value='UK'>UK</MenuItem>
                          <MenuItem value='USA'>USA</MenuItem>
                          <MenuItem value='Australia'>Australia</MenuItem>
                          <MenuItem value='Germany'>Germany</MenuItem>
                        </CustomTextField>
                      )}
                    />
                    {errors.select && <FormHelperText error>This field is required.</FormHelperText>}
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name='textarea'
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomTextField
                          {...field}
                          rows={4}
                          fullWidth
                          multiline
                          label='Bio'
                          {...(errors.textarea && { error: true, helperText: 'This field is required.' })}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl error={Boolean(errors.radio)}>
                      <FormLabel>Gender</FormLabel>
                      <Controller
                        name='radio'
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <RadioGroup row {...field} name='radio-buttons-group'>
                            <FormControlLabel value='female' control={<Radio />} label='Female' />
                            <FormControlLabel value='male' control={<Radio />} label='Male' />
                            <FormControlLabel value='other' control={<Radio />} label='Other' />
                          </RadioGroup>
                        )}
                      />
                      {errors.radio && <FormHelperText error>This field is required.</FormHelperText>}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl error={Boolean(errors.checkbox)}>
                      <Controller
                        name='checkbox'
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <FormControlLabel
                            control={<Checkbox {...field} />}
                            label='Agree to our terms and conditions'
                          />
                        )}
                      />
                      {errors.checkbox && <FormHelperText error>This field is required.</FormHelperText>}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} className='flex gap-4'>
                    <Button variant='contained' type='submit'>
                      Submit
                    </Button>
                    <Button variant='tonal' color='secondary' type='reset' onClick={() => reset()}>
                      Reset
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
