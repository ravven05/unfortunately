import React from 'react'
import "../../styles/premiumStyles.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: "30px"
  };

const Premium = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
        <div className='navbar_premium'>
            <h1>Целый месяц Premium бесплатно</h1>
            <div>
            <h4>USD 4.99 в месяц после пробного периода. Отменить подписку можно в любой момент.</h4>
            </div>  
            <div>
            <p className='premium_info'>Действует <i>Условия Использования</i> Бесплатная подписка на месяц. доступна только для новых пользователей Premium</p>
            </div>
            <div>
            <button onClick={handleOpen} className='btn'>C чего начать</button>
            </div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#f0b852"}}>
          <Typography style={{fontWeight: "700", width: "290px", fontSize: "17px" }} id="modal-modal-title" variant="h6" component="h2">
            Начало бесплатного месяца:
            Первая оплата:
          </Typography>
          <Typography style={{fontWeight: "700", width: "120px", marginTop: "2px", fontSize: "17px"}}>
            Сегодня <br />
            7 янв.2023 г.
          </Typography>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: "400", width: "400px", backgroundColor: "#f78a8a" }} >
          ● 4.99 USD в месяц после 1 месяца пробного периода <br />

          ● Бесплатно до 7 янв. 2023 г. <br />

          ● Отменить можно в любой момент. Действуют Условия предложения. <br />

          ● Мы пришлем уведомление за 7 дней до списания. <br />
          </Typography>
          <Typography style={{marginTop: "15px"}}>
            <button className='button_cart1' >
            <p style={{fontSize: "16px", fontWeight: "500"}}>Кредитная или дебетовая карта</p>
            <img style={{width: "160px"}} src="https://cutewallpaper.org/24/visa-logo-png/visa-logo-master-card-visa-american-express-transparent-png-1560x348--free-download-on-nicepng.png" alt="" />
            </button>
          </Typography>
          <Typography style={{marginTop: "15px"}}>
            <button className='button_cart1'>
            <p>PayPal</p>
          <img style={{width: "160px"}} src="https://www.urbantool.com/wp-content/uploads/2016/12/paypal-logo-png.png" alt="" />
          </button>
          </Typography>
        </Box>
      </Modal>
            </div>
            <div>
              <div className='title_middle'>
                <h1>Что дает Premium подписка</h1>
              </div>
              <div className='image_info'>
                <div id='first_img'>
                <img src="https://o.remove.bg/downloads/5f4082eb-7986-4d91-a41e-d9c593867278/3884588-removebg-preview.png"  />
                <h4 className='first_text' >Скачивайте треки</h4>
                </div>
                <div id='second_img'>
                <img  src="https://cdn-icons-png.flaticon.com/512/725/725342.png" alt="" />
                <h4 className='second_text'>Музыка без рекламы</h4>
                </div>
                <div  id='third_img'>
                <img src="https://cdn-icons-png.flaticon.com/512/4029/4029010.png" alt="" />
                <h4 className='third_text'>Включайте любую музыку</h4>
                </div>
                </div>
            </div>
            </div>
        // </div>
    // </div>
  )
}


export default Premium