google.maps.__gjsload__('overlay', function(_){'use strict';var By=_.oa("b"),Cy=_.na(),Dy=function(){var a=this.cg;if(this.getPanes()){if(this.getProjection()){if(!a.b&&this.onAdd)this.onAdd();a.b=!0;this.draw()}}else{if(a.b)if(this.onRemove)this.onRemove();else this.remove();a.b=!1}},Ey=function(a){a.cg=a.cg||new Cy;return a.cg},Fy=function(a){_.yf.call(this);this.$=(0,_.p)(Dy,a)};_.t(By,_.B);
By.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.y(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.b:null))};_.t(Fy,_.yf);_.mc("overlay",{bl:function(a){var b=a.getMap(),c=Ey(a),d=c.rn;c.rn=b;d&&(c=Ey(a),(d=c.fa)&&d.unbindAll(),(d=c.xi)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.v(c.S,_.z.removeListener),c.S=null,c.Xa&&(c.Xa.$(),c.Xa=null),_.Wm("Ox","-p",a));if(b){c=Ey(a);d=c.Xa;d||(d=c.Xa=new Fy(a));_.v(c.S||[],_.z.removeListener);var e=c.fa=c.fa||new _.mm,f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",f,"projectionCenterQ");e.bindTo("projection",b);e.bindTo("projectionTopLeft",
f);e=c.xi=c.xi||new By(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=(0,_.p)(d.M,d);c.S=[_.z.addListener(a,"panes_changed",e),_.z.addListener(f,"zoom_changed",e),_.z.addListener(f,"offset_changed",e),_.z.addListener(b,"projection_changed",e),_.z.addListener(f,"projectioncenterq_changed",e),_.z.forward(b,"forceredraw",d)];d.M();b instanceof _.ae&&(_.Tm(b,"Ox"),_.Vm("Ox","-p",a,!!b.b))}}});});