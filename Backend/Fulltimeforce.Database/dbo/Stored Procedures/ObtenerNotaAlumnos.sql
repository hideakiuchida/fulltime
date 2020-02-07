CREATE PROCEDURE [dbo].[ObtenerNotaAlumnos]
AS
BEGIN
	SELECT a.Id, a.Nombre, nt.Nota 
	FROM [NotaAlumno] nt 
	INNER JOIN [Alumno] a ON nt.IdAlumno = a.Id
END

