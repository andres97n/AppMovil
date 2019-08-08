export interface Curso {
    nombre?: String
    urlVideo: String
    urlThumbnail?: String
    lenguaje?: String
    comentario: [{
        nombre: String
        descripComentario: String
    }]
}