const Content = () => {
  return (
  <>
    <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0"> Top Navigation <small>Example 3.0</small></h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Layout</a></li>
              <li className="breadcrumb-item active">Top Navigation</li>
            </ol>
          </div>
          </div>
        </div>
    </div>
    
    <div className="content">
      <div className="container">

        <div className="row">
          <div className="col-xs-12 col-md-8 col-lg-6">

            <div className="card card-primary">

              <div className="card-header">
                <h4 className="card-title"><i className="fas fa-user-circle mr-2"></i>Agregar Alumno</h4>

              </div>

              <div className="card-body">

              <div className="form-group">
              <label htmlFor=""> Nombre </label>
              <input type="text" name="" id="" className="form-control" placeholder="Escriba su Nombre" />
              </div>
              
              <div className="form-group">
              <label htmlFor=""> Apellidos </label>
              <input type="text" name="" id="" className="form-control" placeholder="Escriba su Apellido" />
              </div>
              
              

              <div className="form-row">

              <div className="form-group col-md-6">
              <label htmlFor=""> Edad </label>
              <input type="number" name="" id="" className="form-control" placeholder="0" step="1"/>
              </div>

              <div className="form-group col-md-6">
              <label htmlFor=""> Calificacion </label>
              <input type="number" name="" id="" className="form-control" placeholder="0" step="0.1" max="10" min="7" />
              </div>

              </div>
              
                          
              <div className="form-group">
              <label htmlFor=""> Email </label>
              <input type="email" name="" id="" className="form-control" placeholder="Escriba su Correo Electronico" />
              </div>
              
              </div>

              <div className="card-footer">
                <button className="btn btn-warning gb-orange btn-lg float-right">Enviar</button>
                <button className="btn btn-secondary btn-lg">Cancelar</button>
              </div>

            </div>
          </div>

          <div className="col-xs-12 col-md-8 col-lg-6">

            <div className="card card-primary">

              <div className="card-header">
                <h4 className="card-title"><i className="fas fa-user-circle mr-2"></i>Agregar Alumno</h4>

              </div>

              <div className="card-body">

              <div className="form-group">
              <label htmlFor=""> Nombre </label>
              <input type="text" name="" id="" className="form-control" placeholder="Escriba su Nombre" />
              </div>
              
              <div className="form-group">
              <label htmlFor=""> Apellidos </label>
              <input type="text" name="" id="" className="form-control" placeholder="Escriba su Apellido" />
              </div>
              
              

              <div className="form-row">
                
              <div className="form-group col-md-6">
              <label htmlFor=""> Edad </label>
              <input type="number" name="" id="" className="form-control" placeholder="0" step="1"/>
              </div>

              <div className="form-group col-md-6">
              <label htmlFor=""> Calificacion </label>
              <input type="number" name="" id="" className="form-control" placeholder="0" step="0.1" max="10" min="7" />
              </div>

              </div>
              
                          
              <div className="form-group">
              <label htmlFor=""> Email </label>
              <input type="email" name="" id="" className="form-control" placeholder="Escriba su Correo Electronico" />
              </div>
              
              </div>

              <div className="card-footer">
                <button className="btn btn-warning gb-orange btn-lg float-right">Enviar</button>
                <button className="btn btn-secondary btn-lg">Cancelar</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Content;
