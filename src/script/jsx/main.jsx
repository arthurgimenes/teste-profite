"use strict";

// profile

	var Profile = React.createClass({
		getDefaultProps: function(){
			var auth = false;
			var username = 'Visitante';
		},
	  render: function() {

	  	var status = this.props.auth;
	  	var username = 'Rafael';

	    return (
	    		<div className="profile">
	            <p><b>Olá, {status ? username: 'Visitante'}</b></p>
	            <ul className="inline">
	            		{status ? (
	            				<LinksProfile propHref="#" propTxt="Meu perfil" />
	            			): (
	            				<LinksProfile propHref="#" propTxt="Cadastre-se" />
	            			)
	            		}
	                <li>-</li>
	                {status ? (
	            				<LinksProfile propHref="#" propTxt="Sair"/>
	            			): (
	            				<LinksProfile propHref="#" propTxt="Login" />
	            			)
	            		}

	            </ul>
	        </div>
	    	)
	  }
	});

	var LinksProfile = React.createClass({
		getDefaultProps: function(){
			var propHref = '';
			var propTxt = '';
		},
		render:function() {
			return (
					<li>
						<a href={this.props.propHref}>{this.props.propTxt}</a>
					</li>
				)
		}
	});

	ReactDOM.render(
	  <Profile auth={false}/>,
	  document.getElementById('profile')
	);

// search

	var Search = React.createClass({
		getDefaultProps: function(){
			var placeholder = 'Buscar por ...';
			var autocomplete = 'off';
		},
		onFocus: function(e) {
	  	e.target.placeholder = '';
		},
		onBlur: function (e) {
			if(e.target.value == ''){
			 e.target.placeholder = this.props.placeholder;
			}
	  },
		render:function() {
			return (
					<div className="search">
						<form>
							<input type="submit" className="btn-busca" name="busca"  value="" />
							<input type="text" className="inputtext" placeholder={this.props.placeholder} autocomplete={this.props.autocomplete} onFocus={this.onFocus} onBlur={this.onBlur}  />
						</form>
	        </div>
				)
		}
	});

	ReactDOM.render(
	  <Search placeholder='Buscar por ...' autocomplete="off"/>,
	  document.getElementById('search')
	);

// banner

	var Banner = React.createClass({
		getDefaultProps: function(){
				return {
					config:{
						'path' : 'json/banners.json'
					}
				}
		},
		getInitialState: function() {
	      return {
	        banners: []
	      };
	  },
	  componentDidMount: function() {
	    $.ajax({
	      url: this.props.config.path,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        // console.log('success');
	        this.setState({banners: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	      	console.log(xhr, status, err);
	        // console.log('fail');
	      }.bind(this)
	    });
	  },
		render:function(){

			var slide = this.state.banners.map(function(b,i){
				return (
						<TemplateBanner
						slide={i}
						texto={b.texto}
						banner={b.banner}
						link={b.destino}
						/>
				);
			});

			var bullets = this.state.banners.map(function(b, i){
				return (
						<TemplateBullets
						index={i}
						/>
				);
			});

			// console.log({slide.length})

			return (
				<div className="banner">
					<div className="content">
						{slide}
					</div>
					<div className="nav left">
						<a href="#Prev" className="seta btn-prev">Prev</a>
   				</div>
   				<div className="nav right">
						<a href="#Next" className="seta btn-next"> Next</a>
   				</div>
   				<div className="bullets">
   					<ul className="inline">
   						{bullets}
   					</ul>
   				</div>
				</div>
			)
		}
	});

	var TemplateBanner = React.createClass({
		render:function(){
			var slide = this.props.slide;
			var texto = this.props.texto;
			var banner =this.props.banner;
			var destino =this.props.destino;


			return (
				<div className="slide" rel={slide}>
					<a href={destino}>
 						<img src={banner} className="img-responsiva" alt={texto} />
 					</a>
	    	</div>
			)
		}
	});

	var TemplateBullets = React.createClass({
		render:function(){
			var index =this.props.index;
			return (
				<li>
					<a href="#" rel={index}>
 						{index + 1}
 					</a>
	    	</li>
			)
		}
	});

	ReactDOM.render(
	  <Banner />,
	  document.getElementById('banner')
	)

// Produtos

	var Produtos = React.createClass({
		getDefaultProps: function(){
				return {
					config:{
						'path' : 'json/produtos.json'
					}
				}
		},
		getInitialState: function() {
	      return {
	        produtos: []
	      };
	  },
	  componentDidMount: function() {
	    $.ajax({
	      url: this.props.config.path,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        // console.log('success');
	        this.setState({produtos: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	      	console.log(xhr, status, err);
	        // console.log('fail');
	      }.bind(this)
	    });
	  },
		render:function(){
			var slide = this.state.produtos.map(function(p){
				return (
						<TemplateProduto
						nome={p.produto}
						de={p.de}
						por={p.por}
						qtdParcelas={p.qtdParcelas}
						valorParcelado={p.valorParcelado}
						economize={p.economize}
						foto={p.foto}
						fotoHover={p.fotoHover}
						fotoLightbox={p.fotoLightbox}
						/>
				);
			});
			return (
				<div className="slider-produtos">
						{slide}
				</div>
			)
		}
	});

	var TemplateProduto = React.createClass({
		render:function(){

			var foto =this.props.foto;
			var nome =this.props.nome;
			var nome =this.props.nome;
			var de =this.props.de;
			var por =this.props.por;
			var qtdParcelas =this.props.qtdParcelas;
			var valorParcelado =this.props.valorParcelado;
			var economize =this.props.economize;

			return (
				<div className="produto column column-6 column-m-3 column-l-3">
					<div className="border-content">
		        <div className="photo">
		            <img src={foto} alt={nome} />
		        </div>
		        <div className="nome-produto">
		            <p>{nome}</p>
		        </div>
		        <div className="avaliacao-produto">
		        	<img src="assets/img/estrelas.png" />
		        </div>
		        <div className="forma-de-pagamento">
			        	{ de ? <p className="de"><strike>De: {de}</strike></p> : null}
		            <p className="por">Por: {por}</p>
		            <p className="outra-opcao">ou até <span>{qtdParcelas}</span> de <span>{valorParcelado}</span></p>
		        </div>
		        <div className="btn-comprar">
		            <a href="#Comprar"> Comprar </a>
		        </div>
	        </div>
		      { economize ? <div className="economia"> <p>Economize: {economize}</p> </div>: null}
	    	</div>
			)
		}
	});

	ReactDOM.render(
	  <Produtos />,
	  document.getElementById('produtos')
	)

// address

	var Address = React.createClass({
		render:function() {
			return (
					<div className="address">
						<BoxEndereco img="assets/img/icone_rj.png" estado="RJ" endereco="Rua Acre, 77 - sala 1108 Centro - Rio de Janeiro" telefone="tel:+552122636044" txtTelefone="tel.: +55 (21) 2263.6044" />
						<BoxEndereco img="assets/img/icone_sp.png" estado="SP" endereco="Rua Cardoso de melo, 1750, 6° Andar Vila Olímpia" telefone="tel:+552122636044" txtTelefone="tel.: +55 (21) 2263.6044" />
	        </div>
				)
		}
	});

	var BoxEndereco = React.createClass({
		render:function() {
			return (
					<div className="box-endereco">
						<span className="tag">
							<img src={this.props.img} alt={this.props.estado} />
						</span>
						<p>{this.props.endereco} </p>
						<p><a href={this.props.telefone}>{this.props.txtTelefone}</a></p>
	        </div>
				)
		}
	});


	ReactDOM.render(
	  <Address />,
	  document.getElementById('address')
	);
