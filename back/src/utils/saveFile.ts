// import express from 'express';
// import multer from 'multer';
// import path from 'path';

// const router = express.Router();
// const upload = multer({ dest: 'uploads/' }); // Define el directorio de destino para guardar las imágenes

// router.post('/upload-image', upload.single('image'), (req, res) => {
//     // Verificar si se ha cargado un archivo
//     if (!req.file) {
//         return res.status(400).json({ error: 'No se ha proporcionado ningún archivo' });
//     }

//     // Obtener la información del archivo cargado
//     const filename = req.file.filename;
//     const tempPath = req.file.path;
//     const targetPath = path.join(__dirname, '..', 'uploads', filename); // Definir la ruta de destino

//     // Mover el archivo de la carpeta temporal a la carpeta de destino
//     fs.rename(tempPath, targetPath, (err) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Error al guardar la imagen' });
//         }
        
//         // Devolver el nombre del archivo almacenado como respuesta
//         res.status(200).json({ filename });
//     });
// });

// export default router;
