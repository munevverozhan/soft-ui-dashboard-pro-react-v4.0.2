import { useState } from "react";
import SoftButton from "./SoftButton"
import { Box, Modal, Typography,Button } from "@mui/material";
import SoftInput from "./SoftInput";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddProduct = (props) => {
    const [productName, setProductName] = useState('');
    const [show, setShow] = useState(props.show);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <SoftButton color="info" variant='gradient' onClick={handleShow}> Add Product </SoftButton>
            <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"              
            >

                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Product
                    </Typography>
                    <Typography id="modal-modal-description" component={'span'} sx={{ mt: 2 }}>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setProductName('');
                                props.newProduct(productName);
                            }}
                            id="editmodal"
                        >
                            <div>
                                <div>
                                    <label htmlFor="productName">
                                        Producuct Name
                                    </label>
                                </div>
                                <div>
                                    <SoftInput
                                        id="productName"
                                        placeholder="adınız"
                                        type="text"
                                        value={productName}
                                        onChange={(e) => {
                                            setProductName(e.target.value)
                                        }} />
                                </div>

                            </div>
                        </form>
                        <br/>
                        <div>
                            <Button variant="contained" onClick={handleClose} > close </Button>
                            <SoftButton variant="contained" color="success" form="editmodal" >kaydet</SoftButton>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}
export default AddProduct