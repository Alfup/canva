const Q=Array,W=1e-6,At=Math.PI,Mt=Math.tan,tt=Math.hypot,Ct=Math.acos,L=Math.sin,G=Math.cos,N=Math.sqrt,J=Math.min,et=Math.max,zt=Math.floor;class R extends WeakMap{set(t,e,i){if("dispose"in t&&typeof t.dispose=="function"){const n=t.dispose.bind(t);t.dispose=()=>{i?.(),n(),this.delete(t)}}return super.set(t,e)}}class k extends Q{constructor(){super(16),this.identity()}set(...t){for(let e=0;e<16;e++)this[e]=t[e];return this}copy(t){return this.set(...t)}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}multiply(t){if(typeof t=="number")for(let e=0;e<16;e++)this[e]*=t;else{const[e,i,n,r,o,s,l,a,d,u,p,m,g,f,v,h]=this,[P,b,w,S,y,A,M,C,x,T,z,_,O,V,j,B]=t;this.set(e*P+o*b+d*w+g*S,i*P+s*b+u*w+f*S,n*P+l*b+p*w+v*S,r*P+a*b+m*w+h*S,e*y+o*A+d*M+g*C,i*y+s*A+u*M+f*C,n*y+l*A+p*M+v*C,r*y+a*A+m*M+h*C,e*x+o*T+d*z+g*_,i*x+s*T+u*z+f*_,n*x+l*T+p*z+v*_,r*x+a*T+m*z+h*_,e*O+o*V+d*j+g*B,i*O+s*V+u*j+f*B,n*O+l*V+p*j+v*B,r*O+a*V+m*j+h*B)}return this}determinant(){const[t,e,i,n,r,o,s,l,a,d,u,p,m,g,f,v]=this,h=t*o-e*r,P=t*s-i*r,b=e*s-i*o,w=a*g-d*m,S=a*f-u*m,y=d*f-u*g,A=t*y-e*S+i*w,M=r*y-o*S+s*w,C=a*b-d*P+u*h,x=m*b-g*P+f*h;return l*A-n*M+v*C-p*x}transpose(){const[t,e,i,n,r,o,s,l,a,d,u,p,m,g,f,v]=this;return this.set(t,r,a,m,e,o,d,g,i,s,u,f,n,l,p,v)}invert(){const[t,e,i,n,r,o,s,l,a,d,u,p,m,g,f,v]=this,h=t*o-e*r,P=t*s-i*r,b=t*l-n*r,w=e*s-i*o,S=e*l-n*o,y=i*l-n*s,A=a*g-d*m,M=a*f-u*m,C=a*v-p*m,x=d*f-u*g,T=d*v-p*g,z=u*v-p*f,_=this.determinant();return _?this.set(o*z-s*T+l*x,i*T-e*z-n*x,g*y-f*S+v*w,u*S-d*y-p*w,s*C-r*z-l*M,t*z-i*C+n*M,f*b-m*y-v*P,a*y-u*b+p*P,r*T-o*C+l*A,e*C-t*T-n*A,m*S-g*b+v*h,d*b-a*S-p*h,o*M-r*x-s*A,t*x-e*M+i*A,g*P-m*w-f*h,a*w-d*P+u*h).multiply(1/_):this}perspective(t,e,i,n){const r=t*(At/180),o=1/Mt(r/2),s=1/(i-n);return this.set(o/e,0,0,0,0,o,0,0,0,0,(n+i)*s,-1,0,0,2*n*i*s,0)}orthogonal(t,e,i,n,r,o){const s=1/(t-e),l=1/(i-n),a=1/(r-o);return this.set(-2*s,0,0,0,0,-2*l,0,0,0,0,2*a,0,(t+e)*s,(n+i)*l,(o+r)*a,1)}compose(t,e,i){const n=2*e.x*e.x,r=2*e.y*e.x,o=2*e.z*e.x,s=2*e.y*e.y,l=2*e.z*e.y,a=2*e.z*e.z,d=2*e.x*e.w,u=2*e.y*e.w,p=2*e.z*e.w;return this.set((1-(s+a))*i.x,(r+p)*i.x,(o-u)*i.x,0,(r-p)*i.y,(1-(n+a))*i.y,(l+d)*i.y,0,(o+u)*i.z,(l-d)*i.z,(1-(n+s))*i.z,0,t.x,t.y,t.z,1)}normal(t){const[e,i,n,r,o,s,l,a,d,u,p,m,g,f,v,h]=t,P=e*s-i*o,b=e*l-n*o,w=e*a-r*o,S=i*l-n*s,y=i*a-r*s,A=n*a-r*l,M=d*f-u*g,C=d*v-p*g,x=d*h-m*g,T=u*v-p*f,z=u*h-m*f,_=p*h-m*v,O=t.determinant();return O?this.set(s*_-l*z+a*T,n*z-i*_-r*T,f*A-v*y+h*S,0,l*x-o*_-a*C,e*_-n*x+r*C,v*w-g*A-h*b,0,o*z-s*x+a*M,i*x-e*z-r*M,g*y-f*w+h*P,0,0,0,0,1).multiply(1/O):this}normalNDC(){return this[8]+=this[12]/=2,this[9]+=this[13]/=2,this[10]+=this[14]/=2,this[11]+=this[15]/=2,this}}class D extends Q{constructor(t=0,e=0,i=0){super(3),this.set(t,e,i)}get x(){return this[0]}set x(t){this[0]=t}get y(){return this[1]}set y(t){this[1]=t}get z(){return this[2]}set z(t){this[2]=t}set(...t){for(let e=0;e<3;e++)this[e]=t[e];return this}copy(t){return this.set(...t)}add(t){for(let e=0;e<3;e++)this[e]+=typeof t=="number"?t:t[e];return this}sub(t){for(let e=0;e<3;e++)this[e]-=typeof t=="number"?t:t[e];return this}multiply(t){for(let e=0;e<3;e++)this[e]*=typeof t=="number"?t:t[e];return this}divide(t){for(let e=0;e<3;e++)this[e]/=typeof t=="number"?t:t[e];return this}invert(){return this.multiply(-1)}getLength(){return tt(...this)}normalize(){return this.divide(this.getLength()||1)}distanceTo(t){return tt(this.x-t.x,this.y-t.y,this.z-t.z)}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}cross(t){return this.set(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)}lerp(t,e){return this.set(t.x-this.x,t.y-this.y,t.z-this.z).multiply(e)}applyQuaternion(t){const e=t.w*this.x+t.y*this.z-t.z*this.y,i=t.w*this.y+t.z*this.x-t.x*this.z,n=t.w*this.z+t.x*this.y-t.y*this.x,r=-t.x*this.x-t.y*this.y-t.z*this.z;return this.set(e*t.w+r*-t.x+i*-t.z-n*-t.y,i*t.w+r*-t.y+n*-t.x-e*-t.z,n*t.w+r*-t.z+e*-t.y-i*-t.x)}applyMatrix4(t){const[e,i,n,r,o,s,l,a,d,u,p,m,g,f,v,h]=t;return this.set(e*this.x+o*this.y+d*this.z+g,i*this.x+s*this.y+u*this.z+f,n*this.x+l*this.y+p*this.z+v).divide(r*this.x+a*this.y+m*this.z+h||1)}}class Tt extends Q{_a=new D;_b=new D;_c=new D;constructor(t=0,e=0,i=0,n=1){super(4),this.set(t,e,i,n)}get x(){return this[0]}set x(t){this[0]=t}get y(){return this[1]}set y(t){this[1]=t}get z(){return this[2]}set z(t){this[2]=t}get w(){return this[3]}set w(t){this[3]=t}set(...t){for(let e=0;e<4;e++)this[e]=t[e];return this}copy(t){return this.set(...t)}identity(){return this.set(0,0,0,1)}add(t){for(let e=0;e<4;e++)this[e]+=typeof t=="number"?t:t[e];return this}sub(t){for(let e=0;e<4;e++)this[e]-=typeof t=="number"?t:t[e];return this}multiply(t){if(typeof t=="number")for(let e=0;e<4;e++)this[e]*=t;else{const[e,i,n,r]=this,[o,s,l,a]=t;this.set(e*a+r*o+i*l-n*s,i*a+r*s+n*o-e*l,n*a+r*l+e*s-i*o,r*a-e*o-i*s-n*l)}return this}divide(t){for(let e=0;e<4;e++)this[e]/=typeof t=="number"?t:t[e];return this}invert(){for(let t=0;t<4;t++)this[t]*=-1;return this}getLength(){return tt(...this)}normalize(){return this.divide(this.getLength()||1)}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}fromEuler(t,e,i){const n=L(t),r=G(t),o=L(e),s=G(e),l=L(i),a=G(i);return this.set(n*s*a+r*o*l,r*o*a-n*s*l,r*s*l+n*o*a,r*s*a-n*o*l)}slerp(t,e){let i=this.dot(t);i<0&&(i*=-1);let n=1-e,r=e;if(1-i>W){const o=Ct(i),s=L(o);n=L((1-e)*o)/s,r=L(e*o)/s}return i<0&&(r*=-1),this.set(n*this.x+r*t.x,n*this.y+r*t.y,n*this.z+r*t.z,n*this.w+r*t.w)}lookAt(t,e,i){const n=this._a.copy(t).sub(e);n.getLength()===0?n.z=1:n.normalize();const r=this._b.copy(i).cross(n);if(r.getLength()===0){const h=this._c.copy(i);h.z?h.x+=W:h.y?h.z+=W:h.y+=W,r.cross(h)}r.normalize();const o=this._c.copy(n).cross(r),[s,l,a]=r,[d,u,p]=o,[m,g,f]=n,v=s+u+f;if(v>0){const h=N(v+1)*2;return this.set((p-g)/h,(m-a)/h,(l-d)/h,h/4)}else if(s>u&&s>f){const h=N(1+s-u-f)*2;return this.set(h/4,(l+d)/h,(m+a)/h,(p-g)/h)}else if(u>f){const h=N(1+u-s-f)*2;return this.set((l+d)/h,h/4,(p+g)/h,(m-a)/h)}else{const h=N(1+f-s-u)*2;return this.set((m+a)/h,(p+g)/h,h/4,(l-d)/h)}}}class mt{matrix=new k;quaternion=new Tt;position=new D;scale=new D(1,1,1);up=new D(0,1,0);children=[];parent=null;matrixAutoUpdate=!0;visible=!0;frustumCulled=!0;lookAt(t){this.quaternion.lookAt(this.position,t,this.up)}updateMatrix(){if(this.matrixAutoUpdate){this.matrix.compose(this.position,this.quaternion,this.scale),this.parent&&this.matrix.multiply(this.parent.matrix);for(const t of this.children)t.updateMatrix()}}add(...t){for(const e of t)this.children.push(e),e.parent=this}remove(...t){for(const e of t){const i=this.children.indexOf(e);i!==-1&&this.children.splice(i,1),e.parent=null}}traverse(t){if(!t(this))for(const e of this.children)e.traverse(t)}}class _t extends Q{a=new k;constructor(){super(24)}set(...t){for(let e=0;e<24;e++)this[e]=t[e];return this}copy(t){return this.set(...t)}fromMatrix4(t){const[e,i,n,r,o,s,l,a,d,u,p,m,g,f,v,h]=this.a.copy(t);this.set(r-e,a-o,m-d,h-g,r+e,a+o,m+d,h+g,r+i,a+s,m+u,h+f,r-i,a-s,m-u,h-f,r-n,a-l,m-p,h-v,r+n,a+l,m+p,h+v)}contains(t){const{position:e}=t.geometry.attributes,i=e.data.length/e.size;let n=0;for(let r=0;r<i;r+=e.size){let o=0;for(let s=r;s<r+e.size;s++)o+=e.data[s]**2;n=et(n,N(o))}n*=et(...t.scale);for(let r=0;r<6;r++){const o=r*4;if(this[o]*t.matrix[12]+this[o+1]*t.matrix[13]+this[o+2]*t.matrix[14]+this[o+3]<=-n)return!1}return!0}normalNDC(){const t=this.a;return this[20]-=t[3],this[21]-=t[7],this[22]-=t[11],this[23]-=t[15],this}}class It extends mt{projectionMatrix=new k;viewMatrix=new k;projectionViewMatrix=new k;frustum=new _t;updateMatrix(){super.updateMatrix(),this.matrixAutoUpdate&&this.viewMatrix.copy(this.matrix).invert()}}class ft{constructor(t={}){this.attributes=t;for(const e in t)this.attributes[e]=t[e],this.attributes[e].needsUpdate=!0}drawRange={start:0,count:1/0};dispose(){}}class gt{uniforms={};vertex;fragment;compute;side="front";transparent=!1;depthTest=!0;depthWrite=!0;blending;constructor(t){t?.transparent&&(this.blending={color:{operation:"add",srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),Object.assign(this,t)}dispose(){}}class vt extends mt{constructor(t=new ft,e=new gt){super(),this.geometry=t,this.material=e}modelViewMatrix=new k;normalMatrix=new k;mode="triangles";instances=1}class Et extends It{constructor(t=75,e=1,i=.1,n=1e3){super(),this.fov=t,this.aspect=e,this.near=i,this.far=n}updateMatrix(){super.updateMatrix(),this.matrixAutoUpdate&&this.projectionMatrix.perspective(this.fov,this.aspect,this.near,this.far)}}class xt{magFilter="nearest";minFilter="nearest";wrapS="clamp";wrapT="clamp";anisotropy=1;needsUpdate=!0;constructor(t){t&&Object.assign(this,t)}}class wt{constructor(t,e=new xt,i,n,r=!0){this.image=t,this.sampler=e,this.format=i,this.type=n,this.needsUpdate=r}dispose(){}}const q=36160,Ot=36064,H=3553,Rt=10240,kt=10241,Dt=10242,Lt=10243,Ft=6408,Z=2929,it=2884,rt=3042,Ut=3317,Nt=35633,Vt=35632,jt=34963,st=34962,Bt=35044,Wt=35048,qt=16384,Ht=256,Yt=1024,Xt=513,$t=1028,Qt=1029,Kt=33984,Gt=0,ot=36386,Jt=35982,Zt=35981,at=35977,te=9728,ee=9729,lt={nearest:te,linear:ee},ne=10497,ie=33071,re=33648,ct={repeat:ne,clamp:ie,mirror:re},se=0,oe=1,ae=768,le=769,ce=770,he=771,ue=774,de=772,pe=773,me=775,fe=776,ge=32769,ve=32770,Y={zero:se,one:oe,src:ae,"one-minus-src":le,"src-alpha":ce,"one-minus-src-alpha":he,"dst-alpha":de,"one-minus-dst-alpha":pe,dst:ue,"one-minus-dst":me,"src-alpha-saturated":fe,constant:ge,"one-minus-constant":ve},xe=32774,we=32778,ye=32779,Pe=32775,be=32776,ht={add:xe,subtract:we,"reverse-subtract":ye,min:Pe,max:be},yt=5126,Se=5120,Ae=5122,Me=5124,Pt=5121,Ce=5123,ze=5125,ut=c=>{switch(c.constructor){case Float32Array:return yt;case Int8Array:return Se;case Int16Array:return Ae;case Int32Array:return Me;case Uint8Array:case Uint8ClampedArray:return Pt;case Uint16Array:return Ce;case Uint32Array:return ze;default:return null}},Te=/[^\w](?:varying|out)\s+\w+\s+(\w+)\s*;/g;class _e{canvas;gl;autoClear=!0;_c=new R;_p=new R;_g=new R;_b=new R;_t=new R;_s=new R;_f=new R;c;a=0;_v=new D;constructor({canvas:t,context:e,...i}={}){this.canvas=t??document.createElement("canvas"),this.gl=e??this.canvas.getContext("webgl2",{alpha:!0,depth:!0,premultipliedAlpha:!0,...i})}setSize(t,e){this.canvas.width=t,this.canvas.height=e,this.gl.viewport(0,0,t,e)}d(t){let e=this._s.get(t);if(e||(e=this.gl.createSampler(),this._s.set(t,e),t.needsUpdate=!0),t.needsUpdate){if(t.anisotropy){const i=this.gl.getExtension("EXT_texture_filter_anisotropic");i&&this.gl.samplerParameteri(e,i.TEXTURE_MAX_ANISOTROPY_EXT,t.anisotropy)}this.gl.samplerParameteri(e,Rt,lt[t.magFilter]),this.gl.samplerParameteri(e,kt,lt[t.minFilter]),this.gl.samplerParameteri(e,Dt,ct[t.wrapS]),this.gl.samplerParameteri(e,Lt,ct[t.wrapT]),t.needsUpdate=!1}return e}b(t,e=0,i=0){let n=this._t.get(t);if(n||(n=this.gl.createTexture(),this._t.set(t,n,()=>this.gl.deleteTexture(n)),t.needsUpdate=!0),this.gl.bindTexture(H,n),t.needsUpdate){this.gl.pixelStorei(Ut,1);const r=t.format??Ft,o=t.type??Pt;t.image?this.gl.texImage2D(H,0,r,r,o,t.image):this.gl.texImage2D(H,0,r,e,i,0,r,o,null),t.image instanceof HTMLVideoElement||(t.needsUpdate=!1)}return this.d(t.sampler),n}setRenderTarget(t){if(!t)return this.gl.bindFramebuffer(q,null),this.gl.viewport(0,0,this.canvas.width,this.canvas.height);let e=this._f.get(t);if(!e||t.needsUpdate){e&&this.gl.deleteFramebuffer(e),e=this.gl.createFramebuffer(),this.gl.bindFramebuffer(q,e);const i=[];let n=Ot;for(const r of t.textures){i.push(n);const o=this.b(r,t.width,t.height);this.gl.framebufferTexture2D(q,n,H,o,0),n++}this.gl.drawBuffers(i),t.needsUpdate=!1,this._f.set(t,e,()=>this.gl.deleteFramebuffer(e))}this.gl.bindFramebuffer(q,e),this.gl.viewport(0,0,t.width,t.height)}setDepthTest(t,e=Xt){t?(this.gl.enable(Z),this.gl.depthFunc(e)):this.gl.disable(Z)}setDepthMask(t){this.gl.depthMask(t)}setCullSide(t="both"){t==="both"?(this.gl.disable(it),this.gl.disable(Z)):(this.gl.enable(it),this.gl.cullFace(t==="front"?Qt:$t))}setBlending(t){t?(this.gl.enable(rt),this.gl.blendFuncSeparate(Y[t.color.srcFactor],Y[t.color.dstFactor],Y[t.alpha.srcFactor],Y[t.alpha.dstFactor]),this.gl.blendEquationSeparate(ht[t.color.operation],ht[t.alpha.operation])):this.gl.disable(rt)}e(t,e,i){const n=this.gl.getUniformLocation(t,e);if(n!==-1){if(i instanceof wt){const r=this.a++;this.gl.activeTexture(Kt+r);const o=this._s.get(i.sampler);return o&&this.gl.bindSampler(r,o),this.b(i),this.gl.uniform1i(n,r)}if(typeof i=="number")return this.gl.uniform1f(n,i);switch(i.length){case 2:return this.gl.uniform2fv(n,i);case 3:return this.gl.uniform3fv(n,i);case 4:return this.gl.uniform4fv(n,i);case 9:return this.gl.uniformMatrix3fv(n,!1,i);case 16:return this.gl.uniformMatrix4fv(n,!1,i)}}}compile(t,e){t.material.uniforms.modelMatrix=t.matrix,e&&(t.material.uniforms.projectionMatrix=e.projectionMatrix,t.material.uniforms.viewMatrix=e.viewMatrix,t.material.uniforms.normalMatrix=t.normalMatrix,t.material.uniforms.modelViewMatrix=t.modelViewMatrix,t.modelViewMatrix.copy(e.viewMatrix).multiply(t.matrix),t.normalMatrix.normal(t.modelViewMatrix));let i=this._c.get(t),n=this._p.get(t.material);if(!n){n=this.gl.createProgram(),this._p.set(t.material,n,()=>this.gl.deleteProgram(n));const o=this.gl.createShader(Nt);this.gl.shaderSource(o,t.material.vertex??t.material.compute),this.gl.compileShader(o),this.gl.attachShader(n,o);const s=this.gl.createShader(Vt);this.gl.shaderSource(s,t.material.fragment??`#version 300 es
void main(){}`),this.gl.compileShader(s),this.gl.attachShader(n,s),this.gl.linkProgram(n);for(const l of[o,s]){const a=this.gl.getShaderInfoLog(l);if(a)throw`${a}
${this.gl.getShaderSource(l)}`}if(this.gl.getProgramInfoLog(n))throw`${this.gl.getProgramInfoLog(n)}`;this.gl.deleteShader(o),this.gl.deleteShader(s)}let r=this._g.get(t.geometry);r||(r=this.gl.createVertexArray(),this._g.set(t.geometry,r,()=>this.gl.deleteVertexArray(r))),this.gl.useProgram(n),this.gl.bindVertexArray(r);for(const o in t.geometry.attributes){const s=t.geometry.attributes[o],l=o==="index"?jt:st;let a=this._b.get(s);if(!a||n!==i?.program||r!==i?.VAO){a?this.gl.bindBuffer(l,a):(a=this.gl.createBuffer(),this._b.set(s,a),this.gl.bindBuffer(l,a),this.gl.bufferData(l,s.data,Bt),s.needsUpdate=!1);const d=this.gl.getAttribLocation(n,o);if(d!==-1){const u=J(4,et(1,zt(s.size/3)));for(let p=0;p<u;p++){this.gl.enableVertexAttribArray(d+p);const m=ut(s.data),g=s.size*s.data.BYTES_PER_ELEMENT,f=s.size*p;m===yt?this.gl.vertexAttribPointer(d,s.size,m,!1,g,f):this.gl.vertexAttribIPointer(d,s.size,m,g,f),s.divisor&&this.gl.vertexAttribDivisor(d+p,s.divisor)}}}s.needsUpdate&&(this.gl.bindBuffer(l,a),this.gl.bufferData(l,s.data,Wt),s.needsUpdate=!1)}this.a=0;for(const o in t.material.uniforms)this.e(n,o,t.material.uniforms[o]);return i||(i={program:n,VAO:r},this._c.set(t,i)),i}clear(t=qt|Ht|Yt){this.gl.clear(t)}sort(t,e){const i=[];return e?.matrixAutoUpdate&&(e.projectionViewMatrix.copy(e.projectionMatrix).multiply(e.viewMatrix),e.frustum.fromMatrix4(e.projectionViewMatrix)),t.traverse(n=>{if(!n.visible)return!0;if(n instanceof vt){if(e&&n.frustumCulled&&!e.frustum.contains(n))return!0;i.push(n)}}),i.sort((n,r)=>r.material.depthTest-n.material.depthTest||!!e&&this._v.set(r.matrix[12],r.matrix[13],r.matrix[14]).applyMatrix4(e.projectionViewMatrix).z-this._v.set(n.matrix[12],n.matrix[13],n.matrix[14]).applyMatrix4(e.projectionViewMatrix).z||n.material.transparent-r.material.transparent)}render(t,e){this.autoClear&&this.clear(),t.updateMatrix(),e?.updateMatrix();const i=this.sort(t,e);for(const n of i){this.compile(n,e),this.setDepthTest(n.material.depthTest),this.setDepthMask(n.material.depthWrite),this.setCullSide(n.material.side),this.setBlending(n.material.blending);const r=this.gl[n.mode.toUpperCase()],{index:o,position:s}=n.geometry.attributes,{start:l,count:a}=n.geometry.drawRange;o?this.gl.drawElementsInstanced(r,J(a,o.data.length/o.size),ut(o.data),l,n.instances):s?this.gl.drawArraysInstanced(r,l,J(a,s.data.length/s.size),n.instances):this.gl.drawArraysInstanced(r,0,3,n.instances)}}compute(t){const e=this.compile(t);this.gl.bindVertexArray(null),this.gl.bindBuffer(st,null);const i=this.c??=this.gl.createTransformFeedback();this.gl.bindTransformFeedback(ot,i);let n=0;const r=[];for(const[,s]of t.material.compute.matchAll(Te)){const l=t.geometry.attributes[s],a=this._b.get(l);this.gl.bindBufferBase(Jt,r.length,a),n=Math.max(n,l.data.length/l.size),r.push(s)}this.gl.transformFeedbackVaryings(e.program,r,Zt),this.gl.linkProgram(e.program);const o=Gt;this.gl.enable(at),this.gl.beginTransformFeedback(o),this.gl.bindVertexArray(e.VAO),n?this.gl.drawArraysInstanced(o,0,n,t.instances):this.gl.drawArraysInstanced(o,0,t.instances,1),this.gl.bindVertexArray(null),this.gl.endTransformFeedback(),this.gl.disable(at),this.gl.bindTransformFeedback(ot,null)}}const Ie=typeof navigator<"u"&&await navigator.gpu?.requestAdapter();await Ie?.requestDevice();function Ee(c){return c.reduce((t,e)=>t.concat(e),[])}function Oe({canvas:c,...t}){let e=c??document.querySelector("canvas");const i=new _e({canvas:e});i.setSize(window.innerWidth*t?.uniforms?.uQuality,window.innerHeight*t?.uniforms?.uQuality);const n=new Et,r=new gt(t),o=new ft({position:{size:3,data:new Float32Array(Ee([[0,0,0],[1,0,0],[0,1,0],[0,1,0],[1,0,0],[1,1,0]]))}}),s=new vt(o,r),l=[];function a(u){l.push(u)}const d=s.material.uniforms;return requestAnimationFrame(function u(){requestAnimationFrame(u),l.forEach(p=>p()),d.uTime+=d.uRotationSpeed*.01,i.render(s,n)}),window.addEventListener("resize",()=>{const u=s.material.uniforms.uQuality;i.setSize(window.innerWidth*u,window.innerHeight*u),s.material.uniforms.uResolution=[window.innerWidth,window.innerHeight]}),e.classList.add("loaded"),{renderer:i,raf:a,uniforms:s.material.uniforms,canvas:e}}var Re=`#version 300 es

precision highp float;

in vec3 position;
uniform vec2 uResolution;
uniform vec2 sunDirectionXY;
uniform float uQuality;

out vec3 uSunDirection;
out vec2 uv;

void main() {
   vec2 resolution = uResolution * uQuality;
   uv = (position.xy - 0.5) * resolution / min(resolution.y, resolution.x);
   uSunDirection = normalize(vec3(sunDirectionXY, 0.));

   gl_Position = vec4(2.0 * position - 1.0, 1.0);
}`,ke=`#version 300 es

precision highp float;
precision mediump int;
precision mediump sampler2D;

in vec2 uv;
out vec4 fragColor;

uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uPlanetPosition;
uniform float uPlanetRadius;
uniform float uRotationOffset;
uniform float uBumpStrength;
uniform sampler2D uPlanetColor;
uniform sampler2D uStars;
uniform vec3 uCameraPosition;
uniform vec3 uAtmosphereColor;
uniform float uAtmosphereDensity;
uniform float uSunIntensity;
uniform float uAmbientLight;
in vec3 uSunDirection;

#define ROTATION_SPEED -0.2
#define PLANET_ROTATION rotateY(uTime * ROTATION_SPEED + uRotationOffset)
#define SUN_COLOR vec3(1.0, 1.0, 1.0)
#define DEEP_SPACE vec3(0., 0., 0.0005)
#define INFINITY 1e10
#define CAMERA_POSITION uCameraPosition
#define FOCAL_LENGTH CAMERA_POSITION.z / (CAMERA_POSITION.z - uPlanetPosition.z)
#define PI acos(-1.)

struct Material {
  vec3 color;
  float diffuse;
  float specular;
  vec3 emission;
};

struct Hit {
  float len;
  vec3 normal;
  Material material;
};

struct Sphere {
  vec3 position;
  float radius;
};

Sphere getPlanet() {
  return Sphere(uPlanetPosition, uPlanetRadius);
}

Hit miss = Hit(INFINITY, vec3(0.), Material(vec3(0.), -1., -1., vec3(-1.)));

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}

vec2 sphereProjection(vec3 p, vec3 origin) {
  vec3 dir = normalize(p - origin);
  float longitude = atan(dir.x, dir.z);
  float latitude = asin(dir.y);
  return vec2((longitude + PI) / (2. * PI), (latitude + PI / 2.) / PI);
}

float sphIntersect(in vec3 ro, in vec3 rd, in Sphere sphere) {
  vec3 oc = ro - sphere.position;
  float b = dot(oc, rd);
  float c = dot(oc, oc) - sphere.radius * sphere.radius;
  float h = b * b - c;
  if(h < 0.0) return -1.;
  return -b - sqrt(h);
}

mat3 rotateY(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat3(vec3(c, 0, s), vec3(0, 1, 0), vec3(-s, 0, c));
}

vec3 simpleReinhardToneMapping(vec3 color) {
  float exposure = 1.5;
  color *= exposure / (1. + color / exposure);
  color = pow(color, vec3(1. / 2.4));
  return color;
}

float Sigmoid(float x) {
  return 1.0 / (1.0 + (exp(-(x - 0.7) * 6.5))); 
}

vec3 Scurve(vec3 color) {
  return vec3(Sigmoid(color.x), Sigmoid(color.y), Sigmoid(color.z));
}

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * .1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec3 generateStars(vec2 uv, float density) {
    vec2 coord = floor(uv * 700.0);
    float rand = hash12(coord);
    vec3 stars = vec3(0.0);
    
    if (rand < density) {
        vec2 pointCoord = fract(uv * 700.0) - 0.5;
        float dist = length(pointCoord);
        float brightness = smoothstep(0.15, 0.0, dist);
        float twinkle = sin(uTime * 2.0 + rand * 6.28) * 0.5 + 0.5;
        brightness *= mix(0.8, 1.2, twinkle);
        
        vec3 starColor = mix(
            vec3(1.0, 1.0, 1.2),
            vec3(1.0, 0.9, 0.7),
            hash12(coord + 1.0)
        );
        
        float glow = smoothstep(0.5, 0.0, dist);
        vec3 glowColor = mix(
            vec3(0.5, 0.7, 1.0),
            vec3(1.0, 0.8, 0.5),
            hash12(coord + 2.0)
        );
        
        stars = brightness * starColor * 0.3 + glow * glowColor * 0.1;
    }
    return stars;
}

float planetNoise(vec3 p) {
  vec2 textureCoord = sphereProjection(p, uPlanetPosition);
  float bump = length(texture(uPlanetColor, textureCoord));
  return uBumpStrength * bump;
}

float planetDist(in vec3 ro, in vec3 rd) {
  float smoothSphereDist = sphIntersect(ro, rd, getPlanet());
  vec3 intersection = ro + smoothSphereDist * rd;
  vec3 intersectionWithRotation = PLANET_ROTATION * (intersection - uPlanetPosition) + uPlanetPosition;
  return sphIntersect(ro, rd, Sphere(uPlanetPosition, uPlanetRadius + planetNoise(intersectionWithRotation)));
}

vec3 planetNormal(vec3 p) {
  vec3 rd = uPlanetPosition - p;
  float dist = planetDist(p, rd);
  vec2 e = vec2(max(.01, .03 * smoothstep(1300., 300., uResolution.x)), 0);
  vec3 normal = dist - vec3(planetDist(p - e.xyy, rd), planetDist(p - e.yxy, rd), planetDist(p + e.yyx, rd));
  return normalize(normal);
}

vec3 spaceColor(vec3 direction) {
  vec3 backgroundCoord = direction * rotateY(uTime * ROTATION_SPEED / 20. + 1.5);
  vec2 starUV = sphereProjection(backgroundCoord, vec3(0.));
  
  vec3 stars = vec3(0.0);
  stars += generateStars(starUV * 2.0, 0.0004) * 1.0;
  stars += generateStars(starUV * 4.0, 0.0003) * 0.8;
  stars += generateStars(starUV * 8.0, 0.0002) * 0.6;

  return DEEP_SPACE + stars;
}

vec3 atmosphereColor(vec3 ro, vec3 rd, float spaceMask) {
  float distCameraToPlanetOrigin = length(uPlanetPosition - CAMERA_POSITION);
  float distCameraToPlanetEdge = sqrt(distCameraToPlanetOrigin * distCameraToPlanetOrigin - uPlanetRadius * uPlanetRadius);
  float planetMask = 1.0 - spaceMask;
  vec3 coordFromCenter = (ro + rd * distCameraToPlanetEdge) - uPlanetPosition;
  float distFromEdge = abs(length(coordFromCenter) - uPlanetRadius);
  float planetEdge = max(uPlanetRadius - distFromEdge, 0.) / uPlanetRadius;
  float atmosphereMask = pow(remap(dot(uSunDirection, coordFromCenter), -uPlanetRadius, uPlanetRadius / 2., 0., 1.), 5.);
  atmosphereMask *= uAtmosphereDensity * uPlanetRadius * uSunIntensity;

  vec3 atmosphere = vec3(pow(planetEdge, 120.)) * .5;
  atmosphere += pow(planetEdge, 50.) * .3 * (1.5 - planetMask);
  atmosphere += pow(planetEdge, 15.) * .015;
  atmosphere += pow(planetEdge, 5.) * .04 * planetMask;
  
  return atmosphere * uAtmosphereColor * atmosphereMask;
}

Hit intersectPlanet(vec3 ro, vec3 rd) {
  float len = sphIntersect(ro, rd, getPlanet());

  if(len < 0.) return miss;

  vec3 position = ro + len * rd;
  vec3 rotatedPosition = PLANET_ROTATION * (position - uPlanetPosition) + uPlanetPosition;
  vec2 textureCoord = sphereProjection(rotatedPosition, uPlanetPosition);
  vec3 color = texture(uPlanetColor, textureCoord).rgb;
  color = Scurve(color);
  vec3 normal = planetNormal(position);

  return Hit(len, normal, Material(color, 1., 0., vec3(0.)));
}

Hit intersectScene(vec3 ro, vec3 rd) {
  return intersectPlanet(ro, rd);
}

vec3 radiance(vec3 ro, vec3 rd) {
  vec3 color = vec3(0.);
  float spaceMask = 1.;
  Hit hit = intersectScene(ro, rd);

  if(hit.len < INFINITY) {
    spaceMask = 0.;
    float directLightIntensity = pow(clamp(dot(hit.normal, uSunDirection), 0.0, 1.0), 2.) * uSunIntensity;
    vec3 diffuseLight = directLightIntensity * SUN_COLOR;
    vec3 diffuseColor = hit.material.color.rgb * (uAmbientLight + diffuseLight);
    vec3 reflected = normalize(reflect(-uSunDirection, hit.normal));
    float phongValue = pow(max(0.0, dot(rd, reflected)), 10.) * .2 * uSunIntensity;
    vec3 specularColor = hit.material.specular * vec3(phongValue);
    color = diffuseColor + specularColor + hit.material.emission;
  } else {
    float zoomFactor = min(uResolution.x / uResolution.y, 1.);
    vec3 backgroundRd = normalize(vec3(uv * zoomFactor, -1.));
    color = spaceColor(backgroundRd);
  }

  return color + atmosphereColor(ro, rd, spaceMask);
}

void main() {
  vec3 ro = vec3(CAMERA_POSITION);
  vec3 rd = normalize(vec3(uv * FOCAL_LENGTH, -1.));
  vec3 color = radiance(ro, rd);
  color = simpleReinhardToneMapping(color);
  color *= 1. - 0.5 * pow(length(uv), 3.);
  fragColor = vec4(color, 1.0);
}`;async function De(c,t,e,i){try{const n=await fetch(`/${c}`);if(!n.ok)throw new Error(`Failed to load texture: ${c}`);const r=await n.blob(),o=await createImageBitmap(r,{imageOrientation:"flipY"});return new wt(o,new xt({wrapS:"repeat",wrapT:"repeat",...i}))}catch(n){throw console.error(`Error loading texture ${c}:`,n),n}}async function Le(c){return Promise.all(c.map(({path:t,width:e=2048,height:i=1024,options:n})=>De(t,e,i,n)))}const Fe={uTime:0,uQuality:Math.min(window.devicePixelRatio,window.innerWidth<768?1:1.5),uRotationSpeed:window.innerWidth<768?2:3,uResolution:[window.innerWidth,window.innerHeight],uPlanetPosition:[0,0,-10],uCameraPosition:[0,0,window.innerWidth<768?7:6],uRotationOffset:.6,uPlanetRadius:window.innerWidth<768?.9:1,uBumpStrength:window.innerWidth<768?.008:.01,uNoiseStrength:.2,uTerrainScale:.8,uCloudsDensity:.5,uCloudsScale:1,uCloudsSpeed:window.innerWidth<768?1:1.5,uAtmosphereColor:[.05,.3,.9],uAtmosphereDensity:window.innerWidth<768?.25:.3,uAmbientLight:.05,uSunIntensity:window.innerWidth<768?3:4,sunDirectionXY:[1,1]};async function Ue({uniforms:c},t){}const E={arb:{name:"ARB",texturePath:"2k_ARB.jpg",position:[0,0,0],atmosphere:{color:[.5,.5,.5],density:.2}},base:{name:"BASE",texturePath:"2k_BASE.jpg",position:[5,0,0],atmosphere:{color:[0,.1,.8],density:.2}},bsc:{name:"BSC",texturePath:"2k_BSC.jpg",position:[10,0,0],atmosphere:{color:[1,1,0],density:.2}},eth:{name:"ETH",texturePath:"2k_ETH.jpg",position:[15,0,0],atmosphere:{color:[1,1,1],density:.2}},mult:{name:"MULT",texturePath:"2k_EGOLD.jpg",position:[20,0,0],atmosphere:{color:[0,.8,1],density:.2}},pol:{name:"POL",texturePath:"2k_POL.jpg",position:[25,0,0],atmosphere:{color:[.8,0,1],density:.2}},sol:{name:"SOL",texturePath:"2k_SOL.jpg",position:[30,0,0],atmosphere:{color:[1,.8,.9],density:.2}},tron:{name:"TRON",texturePath:"2k_TRON.jpg",position:[35,0,0],atmosphere:{color:[1,0,0],density:.2}}};let X,I,F=new Map,bt="",nt="";async function dt(c){if(F.has(c))return F.get(c);const t=E[c],[e]=await Le([{path:t.texturePath}]);if(F.size>=2){for(const[i]of F)if(i!==bt&&i!==nt){F.delete(i);break}}return F.set(c,e),e}async function K(c){const t=E[c];if(!t)return;const e=await dt(c);if(X)I.uPlanetColor=e,I.uPlanetPosition=t.position,I.uAtmosphereColor=t.atmosphere.color,I.uAtmosphereDensity=t.atmosphere.density,I.uBumpStrength=t.bumpStrength||.01;else{const l=Oe({vertex:Re,fragment:ke,uniforms:{...Fe,uPlanetRadius:1,uRotationSpeed:5,uPlanetPosition:t.position,uCameraPosition:[t.position[0],0,6],uAtmosphereColor:t.atmosphere.color,uAtmosphereDensity:t.atmosphere.density,uBumpStrength:t.bumpStrength||.01,uQuality:Math.min(window.devicePixelRatio,2),uPlanetColor:e}});X=l.canvas,I=l.uniforms,X.__uniforms=I,Ue({canvas:X,uniforms:I})}bt=c;const i=Object.keys(E),n=i.indexOf(c),r=i[(n+1)%i.length],o=i[(n-1+i.length)%i.length],s=nt===r?r:o;nt=s,dt(s),document.title=`${t.name} | Interactive 3D planet animation`,document.querySelector("h1").textContent=t.name}window.__initPlanet=K;const Ne=window.location.pathname.split("/").pop()||"bsc";K(Ne);document.addEventListener("click",async c=>{const t=c.target.closest("a");if(t&&t.getAttribute("href")?.startsWith("/")){c.preventDefault();const e=t.getAttribute("href").split("/").pop();await K(e)}});window.addEventListener("popstate",async()=>{const c=window.location.pathname.split("/").pop()||"bsc";await K(c)});let $=!1;const Ve=1e3;function St(){return new Promise(c=>{const t=()=>{const e=document.querySelector("canvas");e&&e.__uniforms?c(e):requestAnimationFrame(t)};t()})}async function je(c,t,e,i){if($)return;const r=(await St()).__uniforms;$=!0;const o=Date.now(),s=10,l=[...r.uCameraPosition];[...r.uPlanetPosition];const a=Object.keys(E);a.indexOf(c.name.toLowerCase()),a.indexOf(t.name.toLowerCase());const d=e==="next"?s:-s,u=[t.position[0]+d,t.position[1],t.position[2]];function p(){const m=Date.now()-o,g=Math.min(m/Ve,1),f=1-Math.pow(1-g,3),v=u[0]+d*(1-f),h=[t.position[0],0,r.uCameraPosition[2]];r.uCameraPosition[0]=l[0]+(h[0]-l[0])*f,r.uPlanetPosition[0]=v,g===1?(r.uPlanetPosition=t.position,r.uCameraPosition=h,$=!1,i&&i()):requestAnimationFrame(p)}p()}async function U(c,t,e=!0){if($)return;const i=window.location.pathname.split("/").pop()||"bsc",n=E[i],r=E[c.toLowerCase()];if(!r||!n)return;const o=window.__initPlanet;o&&(await o(c.toLowerCase()),await je(n,r,t,()=>{e&&window.history.pushState({},"",`/${c.toLowerCase()}`),document.querySelector("h1").textContent=r.name,document.querySelectorAll("nav a").forEach(s=>{s.setAttribute("aria-current",s.getAttribute("href")===`/${c.toLowerCase()}`?"page":null)})}))}window.addEventListener("DOMContentLoaded",async()=>{await St();const c=window.location.pathname.split("/").pop()||"bsc";U(c,"next",!1)});document.addEventListener("click",c=>{const t=c.target.closest("a");if(t&&t.getAttribute("href")?.startsWith("/")){c.preventDefault();const e=t.getAttribute("href").split("/").pop();U(e,"next")}});window.addEventListener("keydown",c=>{const t=Object.keys(E),e=t.indexOf(window.location.pathname.split("/").pop()||"bsc");let i;c.key==="ArrowLeft"||c.key==="ArrowUp"?(i=e>0?e-1:t.length-1,U(t[i],"prev")):(c.key==="ArrowRight"||c.key==="ArrowDown")&&(i=e<t.length-1?e+1:0,U(t[i],"next"))});let pt=0;const Be=500;window.addEventListener("wheel",c=>{const t=Date.now();if(t-pt<Be)return;const e=Object.keys(E),i=e.indexOf(window.location.pathname.split("/").pop()||"bsc");let n,r;c.deltaY>0||c.deltaX>0?(r="next",n=i<e.length-1?i+1:0):(r="prev",n=i>0?i-1:e.length-1),U(e[n],r),pt=t});window.addEventListener("popstate",()=>{const c=window.location.pathname.split("/").pop()||"bsc";U(c,"next",!1)});
