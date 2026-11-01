/*! three.js r158 | https://threejs.org

The MIT License

Copyright © 2010-2023 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
var No=Object.defineProperty,vu=((e,t)=>{let i={};for(var r in e)No(i,r,{get:e[r],enumerable:!0});return t||No(i,Symbol.toStringTag,{value:"Module"}),i})({ACESFilmicToneMapping:()=>4,AddEquation:()=>100,AddOperation:()=>2,AdditiveAnimationBlendMode:()=>Xs,AdditiveBlending:()=>2,AlphaFormat:()=>Pu,AlwaysCompare:()=>519,AlwaysDepth:()=>1,AlwaysStencilFunc:()=>519,AmbientLight:()=>oc,AnimationAction:()=>bc,AnimationClip:()=>va,AnimationLoader:()=>ng,AnimationMixer:()=>Og,AnimationObjectGroup:()=>Dg,AnimationUtils:()=>ig,ArcCurve:()=>yh,ArrayCamera:()=>Xl,ArrowHelper:()=>s0,AttachedBindMode:()=>Oo,Audio:()=>xc,AudioAnalyser:()=>bg,AudioContext:()=>To,AudioListener:()=>xg,AudioLoader:()=>vg,AxesHelper:()=>n0,BackSide:()=>1,BasicDepthPacking:()=>Go,BasicShadowMap:()=>0,Bone:()=>zn,BooleanKeyframeTrack:()=>Wi,Box2:()=>Xg,Box3:()=>Qt,Box3Helper:()=>r0,BoxGeometry:()=>_r,BoxHelper:()=>i0,BufferAttribute:()=>Qe,BufferGeometry:()=>ke,BufferGeometryLoader:()=>dc,ByteType:()=>Eu,Cache:()=>ji,Camera:()=>Qa,CameraHelper:()=>t0,CanvasTexture:()=>_h,CapsuleGeometry:()=>Th,CatmullRomCurve3:()=>Zn,CineonToneMapping:()=>3,CircleGeometry:()=>Eh,ClampToEdgeWrapping:()=>Ht,Clock:()=>vc,Color:()=>pe,ColorKeyframeTrack:()=>fo,ColorManagement:()=>Je,CompressedArrayTexture:()=>Ef,CompressedCubeTexture:()=>wf,CompressedTexture:()=>gs,CompressedTextureLoader:()=>og,ConeGeometry:()=>to,ConstantAlphaFactor:()=>213,ConstantColorFactor:()=>211,CubeCamera:()=>gl,CubeReflectionMapping:()=>301,CubeRefractionMapping:()=>302,CubeTexture:()=>$r,CubeTextureLoader:()=>lg,CubeUVReflectionMapping:()=>306,CubicBezierCurve:()=>Jn,CubicBezierCurve3:()=>Mh,CubicInterpolant:()=>$h,CullFaceBack:()=>1,CullFaceFront:()=>2,CullFaceFrontBack:()=>3,CullFaceNone:()=>0,Curve:()=>Zt,CurvePath:()=>bh,CustomBlending:()=>5,CustomToneMapping:()=>5,CylinderGeometry:()=>ca,Cylindrical:()=>Wg,Data3DTexture:()=>rn,DataArrayTexture:()=>Ia,DataTexture:()=>Hi,DataTextureLoader:()=>hg,DataUtils:()=>lp,DecrementStencilOp:()=>_d,DecrementWrapStencilOp:()=>xd,DefaultLoadingManager:()=>tc,DepthFormat:()=>Ws,DepthStencilFormat:()=>Fo,DepthTexture:()=>Pn,DetachedBindMode:()=>xu,DirectionalLight:()=>Mo,DirectionalLightHelper:()=>e0,DiscreteInterpolant:()=>Qh,DisplayP3ColorSpace:()=>Ys,DodecahedronGeometry:()=>wh,DoubleSide:()=>2,DstAlphaFactor:()=>206,DstColorFactor:()=>208,DynamicCopyUsage:()=>Ad,DynamicDrawUsage:()=>Wo,DynamicReadUsage:()=>Td,EdgesGeometry:()=>Ah,EllipseCurve:()=>vs,EqualCompare:()=>514,EqualDepth:()=>4,EqualStencilFunc:()=>514,EquirectangularReflectionMapping:()=>303,EquirectangularRefractionMapping:()=>304,Euler:()=>za,EventDispatcher:()=>ai,ExtrudeGeometry:()=>so,FileLoader:()=>fi,Float16BufferAttribute:()=>mp,Float32BufferAttribute:()=>ge,Float64BufferAttribute:()=>fp,FloatType:()=>Sa,Fog:()=>Un,FogExp2:()=>ql,FramebufferTexture:()=>Tf,FrontSide:()=>0,Frustum:()=>Qr,GLBufferAttribute:()=>kg,GLSL1:()=>"100",GLSL3:()=>Cd,GreaterCompare:()=>516,GreaterDepth:()=>6,GreaterEqualCompare:()=>518,GreaterEqualDepth:()=>5,GreaterEqualStencilFunc:()=>518,GreaterStencilFunc:()=>516,GridHelper:()=>$g,Group:()=>zi,HalfFloatType:()=>ba,HemisphereLight:()=>vo,HemisphereLightHelper:()=>Kg,IcosahedronGeometry:()=>Dh,ImageBitmapLoader:()=>gg,ImageLoader:()=>_a,ImageUtils:()=>en,IncrementStencilOp:()=>vd,IncrementWrapStencilOp:()=>yd,InstancedBufferAttribute:()=>ki,InstancedBufferGeometry:()=>bo,InstancedInterleavedBuffer:()=>Hg,InstancedMesh:()=>Hn,Int16BufferAttribute:()=>dp,Int32BufferAttribute:()=>pp,Int8BufferAttribute:()=>hp,IntType:()=>Ru,InterleavedBuffer:()=>ns,InterleavedBufferAttribute:()=>ia,Interpolant:()=>ma,InterpolateDiscrete:()=>zr,InterpolateLinear:()=>Hr,InterpolateSmooth:()=>Ea,InvertStencilOp:()=>Md,KeepStencilOp:()=>Ra,KeyframeTrack:()=>Jt,LOD:()=>Ql,LatheGeometry:()=>xs,Layers:()=>Ha,LessCompare:()=>513,LessDepth:()=>2,LessEqualCompare:()=>515,LessEqualDepth:()=>3,LessEqualStencilFunc:()=>515,LessStencilFunc:()=>513,Light:()=>bi,LightProbe:()=>cc,Line:()=>pi,Line3:()=>jg,LineBasicMaterial:()=>Ct,LineCurve:()=>Kn,LineCurve3:()=>Sh,LineDashedMaterial:()=>Zh,LineLoop:()=>fh,LineSegments:()=>ei,LinearDisplayP3ColorSpace:()=>Aa,LinearEncoding:()=>js,LinearFilter:()=>mt,LinearInterpolant:()=>mo,LinearMipMapLinearFilter:()=>Tu,LinearMipMapNearestFilter:()=>bu,LinearMipmapLinearFilter:()=>Ai,LinearMipmapNearestFilter:()=>Vs,LinearSRGBColorSpace:()=>ri,LinearToneMapping:()=>1,LinearTransfer:()=>Gr,Loader:()=>Ut,LoaderUtils:()=>So,LoadingManager:()=>go,LoopOnce:()=>fd,LoopPingPong:()=>ko,LoopRepeat:()=>Ho,LuminanceAlphaFormat:()=>Uu,LuminanceFormat:()=>Iu,MOUSE:()=>_u,Material:()=>xt,MaterialLoader:()=>uc,MathUtils:()=>Wd,Matrix3:()=>He,Matrix4:()=>Ne,MaxEquation:()=>104,Mesh:()=>vt,MeshBasicMaterial:()=>ci,MeshDepthMaterial:()=>Rn,MeshDistanceMaterial:()=>Cn,MeshLambertMaterial:()=>co,MeshMatcapMaterial:()=>Yh,MeshNormalMaterial:()=>qh,MeshPhongMaterial:()=>Xh,MeshPhysicalMaterial:()=>Wh,MeshStandardMaterial:()=>ho,MeshToonMaterial:()=>jh,MinEquation:()=>103,MirroredRepeatWrapping:()=>Fr,MixOperation:()=>1,MultiplyBlending:()=>4,MultiplyOperation:()=>0,NearestFilter:()=>Et,NearestMipMapLinearFilter:()=>Su,NearestMipMapNearestFilter:()=>Mu,NearestMipmapLinearFilter:()=>Gs,NearestMipmapNearestFilter:()=>ks,NeverCompare:()=>512,NeverDepth:()=>0,NeverStencilFunc:()=>512,NoBlending:()=>0,NoColorSpace:()=>"",NoToneMapping:()=>0,NormalAnimationBlendMode:()=>wa,NormalBlending:()=>1,NotEqualCompare:()=>517,NotEqualDepth:()=>7,NotEqualStencilFunc:()=>517,NumberKeyframeTrack:()=>fa,Object3D:()=>Ke,ObjectLoader:()=>mg,ObjectSpaceNormalMap:()=>1,OctahedronGeometry:()=>no,OneFactor:()=>201,OneMinusConstantAlphaFactor:()=>214,OneMinusConstantColorFactor:()=>212,OneMinusDstAlphaFactor:()=>207,OneMinusDstColorFactor:()=>209,OneMinusSrcAlphaFactor:()=>205,OneMinusSrcColorFactor:()=>203,OrthographicCamera:()=>ea,P3Primaries:()=>"p3",PCFShadowMap:()=>1,PCFSoftShadowMap:()=>2,PMREMGenerator:()=>Tn,Path:()=>Pr,PerspectiveCamera:()=>_t,Plane:()=>di,PlaneGeometry:()=>ts,PlaneHelper:()=>a0,PointLight:()=>nc,PointLightHelper:()=>Zg,Points:()=>Wn,PointsMaterial:()=>Gn,PolarGridHelper:()=>Qg,PolyhedronGeometry:()=>Ir,PositionalAudio:()=>Sg,PropertyBinding:()=>et,PropertyMixer:()=>Sc,QuadraticBezierCurve:()=>$n,QuadraticBezierCurve3:()=>Qn,Quaternion:()=>wt,QuaternionKeyframeTrack:()=>Dr,QuaternionLinearInterpolant:()=>ec,RED_GREEN_RGTC2_Format:()=>pd,RED_RGTC1_Format:()=>ud,REVISION:()=>"158",RGBADepthPacking:()=>Vo,RGBAFormat:()=>Ri,RGBAIntegerFormat:()=>Ou,RGBA_ASTC_10x10_Format:()=>sd,RGBA_ASTC_10x5_Format:()=>id,RGBA_ASTC_10x6_Format:()=>rd,RGBA_ASTC_10x8_Format:()=>ad,RGBA_ASTC_12x10_Format:()=>nd,RGBA_ASTC_12x12_Format:()=>od,RGBA_ASTC_4x4_Format:()=>Yu,RGBA_ASTC_5x4_Format:()=>Zu,RGBA_ASTC_5x5_Format:()=>Ju,RGBA_ASTC_6x5_Format:()=>Ku,RGBA_ASTC_6x6_Format:()=>$u,RGBA_ASTC_8x5_Format:()=>Qu,RGBA_ASTC_8x6_Format:()=>ed,RGBA_ASTC_8x8_Format:()=>td,RGBA_BPTC_Format:()=>ld,RGBA_ETC2_EAC_Format:()=>qu,RGBA_PVRTC_2BPPV1_Format:()=>Wu,RGBA_PVRTC_4BPPV1_Format:()=>Vu,RGBA_S3TC_DXT1_Format:()=>Bu,RGBA_S3TC_DXT3_Format:()=>zu,RGBA_S3TC_DXT5_Format:()=>Hu,RGB_BPTC_SIGNED_Format:()=>hd,RGB_BPTC_UNSIGNED_Format:()=>cd,RGB_ETC1_Format:()=>Xu,RGB_ETC2_Format:()=>ju,RGB_PVRTC_2BPPV1_Format:()=>Gu,RGB_PVRTC_4BPPV1_Format:()=>ku,RGB_S3TC_DXT1_Format:()=>Fu,RGFormat:()=>zo,RGIntegerFormat:()=>Nu,RawShaderMaterial:()=>Vh,Ray:()=>hr,Raycaster:()=>Gg,Rec709Primaries:()=>Zs,RectAreaLight:()=>lc,RedFormat:()=>Bo,RedIntegerFormat:()=>Du,ReinhardToneMapping:()=>2,RenderTarget:()=>Qo,RepeatWrapping:()=>Qi,ReplaceStencilOp:()=>gd,ReverseSubtractEquation:()=>102,RingGeometry:()=>Nh,SIGNED_RED_GREEN_RGTC2_Format:()=>md,SIGNED_RED_RGTC1_Format:()=>dd,SRGBColorSpace:()=>yt,SRGBTransfer:()=>Vr,Scene:()=>Dn,ShaderChunk:()=>Ie,ShaderLib:()=>Yt,ShaderMaterial:()=>qt,ShadowMaterial:()=>Gh,Shape:()=>Mi,ShapeGeometry:()=>oo,ShapePath:()=>o0,ShapeUtils:()=>Si,ShortType:()=>wu,Skeleton:()=>oh,SkeletonHelper:()=>Yg,SkinnedMesh:()=>sh,Source:()=>Ii,Sphere:()=>Gt,SphereGeometry:()=>As,Spherical:()=>Vg,SphericalHarmonics3:()=>hc,SplineCurve:()=>eo,SpotLight:()=>ac,SpotLightHelper:()=>qg,Sprite:()=>Kl,SpriteMaterial:()=>Nn,SrcAlphaFactor:()=>204,SrcAlphaSaturateFactor:()=>210,SrcColorFactor:()=>202,StaticCopyUsage:()=>wd,StaticDrawUsage:()=>Ca,StaticReadUsage:()=>bd,StereoCamera:()=>_g,StreamCopyUsage:()=>Rd,StreamDrawUsage:()=>Sd,StreamReadUsage:()=>Ed,StringKeyframeTrack:()=>Xi,SubtractEquation:()=>101,SubtractiveBlending:()=>3,TOUCH:()=>yu,TangentSpaceNormalMap:()=>0,TetrahedronGeometry:()=>Oh,Texture:()=>ft,TextureLoader:()=>cg,TorusGeometry:()=>lo,TorusKnotGeometry:()=>Fh,Triangle:()=>Ni,TriangleFanDrawMode:()=>2,TriangleStripDrawMode:()=>1,TrianglesDrawMode:()=>0,TubeGeometry:()=>Bh,TwoPassDoubleSide:()=>2,UVMapping:()=>300,Uint16BufferAttribute:()=>fn,Uint32BufferAttribute:()=>gn,Uint8BufferAttribute:()=>cp,Uint8ClampedBufferAttribute:()=>up,Uniform:()=>Fg,UniformsGroup:()=>zg,UniformsLib:()=>ce,UniformsUtils:()=>fl,UnsignedByteType:()=>er,UnsignedInt248Type:()=>Ta,UnsignedIntType:()=>Br,UnsignedShort4444Type:()=>Cu,UnsignedShort5551Type:()=>Lu,UnsignedShortType:()=>Au,VSMShadowMap:()=>3,Vector2:()=>Z,Vector3:()=>w,Vector4:()=>$e,VectorKeyframeTrack:()=>ga,VideoTexture:()=>bf,WebGL1Renderer:()=>jl,WebGL3DRenderTarget:()=>Jd,WebGLArrayRenderTarget:()=>Zd,WebGLCoordinateSystem:()=>tr,WebGLCubeRenderTarget:()=>vl,WebGLMultipleRenderTargets:()=>Kd,WebGLRenderTarget:()=>kt,WebGLRenderer:()=>In,WebGLUtils:()=>Wl,WebGPUCoordinateSystem:()=>Ld,WireframeGeometry:()=>zh,WrapAroundEnding:()=>kr,ZeroCurvatureEnding:()=>Ci,ZeroFactor:()=>200,ZeroSlopeEnding:()=>Li,ZeroStencilOp:()=>0,_SRGBAFormat:()=>Xo,createCanvasElement:()=>Zo,sRGBEncoding:()=>qs}),_u={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yu={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oo="attached",xu="detached",Qi=1e3,Ht=1001,Fr=1002,Et=1003,ks=1004,Mu=1004,Gs=1005,Su=1005,mt=1006,Vs=1007,bu=1007,Ai=1008,Tu=1008,er=1009,Eu=1010,wu=1011,Au=1012,Ru=1013,Br=1014,Sa=1015,ba=1016,Cu=1017,Lu=1018,Ta=1020,Pu=1021,Ri=1023,Iu=1024,Uu=1025,Ws=1026,Fo=1027,Bo=1028,Du=1029,zo=1030,Nu=1031,Ou=1033,Fu=33776,Bu=33777,zu=33778,Hu=33779,ku=35840,Gu=35841,Vu=35842,Wu=35843,Xu=36196,ju=37492,qu=37496,Yu=37808,Zu=37809,Ju=37810,Ku=37811,$u=37812,Qu=37813,ed=37814,td=37815,id=37816,rd=37817,ad=37818,sd=37819,nd=37820,od=37821,ld=36492,hd=36494,cd=36495,ud=36283,dd=36284,pd=36285,md=36286,fd=2200,Ho=2201,ko=2202,zr=2300,Hr=2301,Ea=2302,Ci=2400,Li=2401,kr=2402,wa=2500,Xs=2501,js=3e3,qs=3001,Go=3200,Vo=3201,yt="srgb",ri="srgb-linear",Ys="display-p3",Aa="display-p3-linear",Gr="linear",Vr="srgb",Zs="rec709",Ra=7680,gd=7681,vd=7682,_d=7683,yd=34055,xd=34056,Md=5386,Ca=35044,Wo=35048,Sd=35040,bd=35045,Td=35049,Ed=35041,wd=35046,Ad=35050,Rd=35042,Cd="300 es",Xo=1035,tr=2e3,Ld=2001,ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},St="00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."),jo=1234567,Pi=Math.PI/180,ir=180/Math.PI;function Nt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(St[e&255]+St[e>>8&255]+St[e>>16&255]+St[e>>24&255]+"-"+St[t&255]+St[t>>8&255]+"-"+St[t>>16&15|64]+St[t>>24&255]+"-"+St[i&63|128]+St[i>>8&255]+"-"+St[i>>16&255]+St[i>>24&255]+St[r&255]+St[r>>8&255]+St[r>>16&255]+St[r>>24&255]).toLowerCase()}function at(e,t,i){return Math.max(t,Math.min(i,e))}function Js(e,t){return(e%t+t)%t}function Pd(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function Id(e,t,i){return e===t?0:(i-e)/(t-e)}function Wr(e,t,i){return(1-i)*e+i*t}function Ud(e,t,i,r){return Wr(e,t,1-Math.exp(-i*r))}function Dd(e,t=1){return t-Math.abs(Js(e,t*2)-t)}function Nd(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Od(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function Fd(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Bd(e,t){return e+Math.random()*(t-e)}function zd(e){return e*(.5-Math.random())}function Hd(e){e!==void 0&&(jo=e);let t=jo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kd(e){return e*Pi}function Gd(e){return e*ir}function Ks(e){return!(e&e-1)&&e!==0}function qo(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function La(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Vd(e,t,i,r,a){let s=Math.cos,n=Math.sin,o=s(i/2),l=n(i/2),h=s((t+r)/2),c=n((t+r)/2),u=s((t-r)/2),d=n((t-r)/2),p=s((r-t)/2),g=n((r-t)/2);switch(a){case"XYX":e.set(o*c,l*u,l*d,o*h);break;case"YZY":e.set(l*d,o*c,l*u,o*h);break;case"ZXZ":e.set(l*u,l*d,o*c,o*h);break;case"XZX":e.set(o*c,l*g,l*p,o*h);break;case"YXY":e.set(l*p,o*c,l*g,o*h);break;case"ZYZ":e.set(l*g,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function De(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("Invalid component type.")}}var Wd={DEG2RAD:Pi,RAD2DEG:ir,generateUUID:Nt,clamp:at,euclideanModulo:Js,mapLinear:Pd,inverseLerp:Id,lerp:Wr,damp:Ud,pingpong:Dd,smoothstep:Nd,smootherstep:Od,randInt:Fd,randFloat:Bd,randFloatSpread:zd,seededRandom:Hd,degToRad:kd,radToDeg:Gd,isPowerOfTwo:Ks,ceilPowerOfTwo:qo,floorPowerOfTwo:La,setQuaternionFromProperEuler:Vd,normalize:De,denormalize:Pt},Z=class Dc{constructor(t=0,i=0){Dc.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(at(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),s=this.x-t.x,n=this.y-t.y;return this.x=s*r-n*a+t.x,this.y=s*a+n*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class Nc{constructor(t,i,r,a,s,n,o,l,h){Nc.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h)}set(t,i,r,a,s,n,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=s,c[5]=l,c[6]=r,c[7]=n,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[3],l=r[6],h=r[1],c=r[4],u=r[7],d=r[2],p=r[5],g=r[8],v=a[0],f=a[3],m=a[6],y=a[1],_=a[4],x=a[7],T=a[2],E=a[5],L=a[8];return s[0]=n*v+o*y+l*T,s[3]=n*f+o*_+l*E,s[6]=n*m+o*x+l*L,s[1]=h*v+c*y+u*T,s[4]=h*f+c*_+u*E,s[7]=h*m+c*x+u*L,s[2]=d*v+p*y+g*T,s[5]=d*f+p*_+g*E,s[8]=d*m+p*x+g*L,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*n*c-i*o*h-r*s*c+r*o*l+a*s*h-a*n*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*n-o*h,d=o*l-c*s,p=h*s-n*l,g=i*u+r*d+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(a*h-c*r)*v,t[2]=(o*r-a*n)*v,t[3]=d*v,t[4]=(c*i-a*l)*v,t[5]=(a*s-o*i)*v,t[6]=p*v,t[7]=(r*l-h*i)*v,t[8]=(n*i-r*s)*v,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,s,n,o){let l=Math.cos(s),h=Math.sin(s);return this.set(r*l,r*h,-r*(l*n+h*o)+n+t,-a*h,a*l,-a*(-h*n+l*o)+o+i,0,0,1),this}scale(t,i){return this.premultiply($s.makeScale(t,i)),this}rotate(t){return this.premultiply($s.makeRotation(-t)),this}translate(t,i){return this.premultiply($s.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$s=new He;function Yo(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}var Xd={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function rr(e,t){return new Xd[e](t)}function Xr(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Zo(){let e=Xr("canvas");return e.style.display="block",e}var Jo={};function jr(e){e in Jo||(Jo[e]=!0,console.warn(e))}var Ko=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$o=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pa={[ri]:{transfer:Gr,primaries:Zs,toReference:e=>e,fromReference:e=>e},[yt]:{transfer:Vr,primaries:Zs,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Aa]:{transfer:Gr,primaries:"p3",toReference:e=>e.applyMatrix3($o),fromReference:e=>e.applyMatrix3(Ko)},[Ys]:{transfer:Vr,primaries:"p3",toReference:e=>e.convertSRGBToLinear().applyMatrix3($o),fromReference:e=>e.applyMatrix3(Ko).convertLinearToSRGB()}},jd=new Set([ri,Aa]),Je={enabled:!0,_workingColorSpace:ri,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(e){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!e},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!jd.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,i){if(this.enabled===!1||t===i||!t||!i)return e;let r=Pa[t].toReference,a=Pa[i].fromReference;return a(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Pa[e].primaries},getTransfer:function(e){return e===""?Gr:Pa[e].transfer}};function ar(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Qs(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var sr,en=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sr===void 0&&(sr=Xr("canvas")),sr.width=e.width,sr.height=e.height;let i=sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=ar(a[s]/255)*255;return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ar(t[i]/255)*255):t[i]=ar(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qd=0,Ii=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Nt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,n=r.length;s<n;s++)r[s].isDataTexture?a.push(tn(r[s].image)):a.push(tn(r[s]))}else a=tn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function tn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?en.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yd=0,ft=class Ns extends ai{constructor(t=Ns.DEFAULT_IMAGE,i=Ns.DEFAULT_MAPPING,r=Ht,a=Ht,s=mt,n=Ai,o=Ri,l=er,h=Ns.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Nt(),this.name="",this.source=new Ii(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=s,this.minFilter=n,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===3001?yt:""),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qi:t.x-=Math.floor(t.x);break;case Ht:t.x=t.x<0?0:1;break;case Fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x-=Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case Qi:t.y-=Math.floor(t.y);break;case Ht:t.y=t.y<0?0:1;break;case Fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y-=Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace==="srgb"?qs:js}set encoding(t){jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===3001?yt:""}};ft.DEFAULT_IMAGE=null,ft.DEFAULT_MAPPING=300,ft.DEFAULT_ANISOTROPY=1;var $e=class Oc{constructor(t=0,i=0,r=0,a=1){Oc.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w===void 0?1:t.w,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=this.w,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a+n[12]*s,this.y=n[1]*i+n[5]*r+n[9]*a+n[13]*s,this.z=n[2]*i+n[6]*r+n[10]*a+n[14]*s,this.w=n[3]*i+n[7]*r+n[11]*a+n[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,s,n=.01,o=.1,l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],f=l[6],m=l[10];if(Math.abs(c-d)<n&&Math.abs(u-v)<n&&Math.abs(g-f)<n){if(Math.abs(c+d)<o&&Math.abs(u+v)<o&&Math.abs(g+f)<o&&Math.abs(h+p+m-3)<o)return this.set(1,0,0,0),this;i=Math.PI;let _=(h+1)/2,x=(p+1)/2,T=(m+1)/2,E=(c+d)/4,L=(u+v)/4,D=(g+f)/4;return _>x&&_>T?_<n?(r=0,a=.707106781,s=.707106781):(r=Math.sqrt(_),a=E/r,s=L/r):x>T?x<n?(r=.707106781,a=0,s=.707106781):(a=Math.sqrt(x),r=E/a,s=D/a):T<n?(r=.707106781,a=.707106781,s=0):(s=Math.sqrt(T),r=L/s,a=D/s),this.set(r,a,s,i),this}let y=Math.sqrt((f-g)*(f-g)+(u-v)*(u-v)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-v)/y,this.z=(d-c)/y,this.w=Math.acos((h+p+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qo=class extends ai{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(jr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===3001?yt:""),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ii(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},kt=class extends Qo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ia=class extends ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zd=class extends kt{constructor(e=1,t=1,i=1){super(e,t),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Ia(null,e,t,i),this.texture.isRenderTargetTexture=!0}},rn=class extends ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jd=class extends kt{constructor(e=1,t=1,i=1){super(e,t),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new rn(null,e,t,i),this.texture.isRenderTargetTexture=!0}},Kd=class extends kt{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLMultipleRenderTargets=!0;let a=this.texture;this.texture=[];for(let s=0;s<i;s++)this.texture[s]=a.clone(),this.texture[s].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.texture.length;r<a;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}},wt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,n){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],u=a[s+0],d=a[s+1],p=a[s+2],g=a[s+3];if(n===0)e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;else if(n===1)e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=g;else{if(c!==g||o!==u||l!==d||h!==p){let v=1-n,f=o*u+l*d+h*p+c*g,m=f>=0?1:-1,y=1-f*f;if(y>2**-52){let x=Math.sqrt(y),T=Math.atan2(x,f*m);v=Math.sin(v*T)/x,n=Math.sin(n*T)/x}let _=n*m;if(o=o*v+u*_,l=l*v+d*_,h=h*v+p*_,c=c*v+g*_,v===1-n){let x=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=x,l*=x,h*=x,c*=x}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}}static multiplyQuaternionsFlat(e,t,i,r,a,s){let n=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[s],u=a[s+1],d=a[s+2],p=a[s+3];return e[t]=n*p+h*c+o*d-l*u,e[t+1]=o*p+h*u+l*c-n*d,e[t+2]=l*p+h*d+n*u-o*c,e[t+3]=h*p-n*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,r=e._y,a=e._z,s=e._order,n=Math.cos,o=Math.sin,l=n(i/2),h=n(r/2),c=n(a/2),u=o(i/2),d=o(r/2),p=o(a/2);switch(s){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],n=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=i+n+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(s-r)*d}else if(i>n&&i>c){let d=2*Math.sqrt(1+i-n-c);this._w=(h-o)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(a+l)/d}else if(n>c){let d=2*Math.sqrt(1+n-i-c);this._w=(a-l)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-i-n);this._w=(s-r)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<2**-52?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,n=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+s*n+r*l-a*o,this._y=r*h+s*o+a*n-i*l,this._z=a*h+s*l+i*o-r*n,this._w=s*h-i*n-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,s=this._w,n=s*e._w+i*e._x+r*e._y+a*e._z;if(n<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,n=-n):this.copy(e),n>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;let o=1-n*n;if(o<=2**-52){let d=1-t;return this._w=d*s+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*a+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(o),h=Math.atan2(l,n),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=s*c+this._w*u,this._x=i*c+this._x*u,this._y=r*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class Fc{constructor(t=0,i=0,r=0){Fc.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(el.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(el.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[3]*r+s[6]*a,this.y=s[1]*i+s[4]*r+s[7]*a,this.z=s[2]*i+s[5]*r+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=t.elements,n=1/(s[3]*i+s[7]*r+s[11]*a+s[15]);return this.x=(s[0]*i+s[4]*r+s[8]*a+s[12])*n,this.y=(s[1]*i+s[5]*r+s[9]*a+s[13])*n,this.z=(s[2]*i+s[6]*r+s[10]*a+s[14])*n,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,s=t.x,n=t.y,o=t.z,l=t.w,h=2*(n*a-o*r),c=2*(o*i-s*a),u=2*(s*r-n*i);return this.x=i+l*h+n*u-o*c,this.y=r+l*c+o*h-s*u,this.z=a+l*u+s*c-n*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a,this.y=s[1]*i+s[5]*r+s[9]*a,this.z=s[2]*i+s[6]*r+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,s=t.z,n=i.x,o=i.y,l=i.z;return this.x=a*l-s*o,this.y=s*n-r*l,this.z=r*o-a*n,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return an.copy(this).projectOnVector(t),this.sub(an)}reflect(t){return this.sub(an.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(at(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-t**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},an=new w,el=new wt,Qt=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,n=a.count;s<n;s++)e.isMesh===!0?e.getVertexPosition(s,Wt):Wt.fromBufferAttribute(a,s),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox===void 0?(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Da.subVectors(this.max,qr),nr.subVectors(e.a,qr),or.subVectors(e.b,qr),lr.subVectors(e.c,qr),gi.subVectors(or,nr),vi.subVectors(lr,or),Ui.subVectors(nr,lr);let t=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-Ui.z,Ui.y,gi.z,0,-gi.x,vi.z,0,-vi.x,Ui.z,0,-Ui.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-Ui.y,Ui.x,0];return!sn(t,nr,or,lr,Da)||(t=[1,0,0,0,1,0,0,0,1],!sn(t,nr,or,lr,Da))?!1:(Na.crossVectors(gi,vi),t=[Na.x,Na.y,Na.z],sn(t,nr,or,lr,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},si=[new w,new w,new w,new w,new w,new w,new w,new w],Wt=new w,Ua=new Qt,nr=new w,or=new w,lr=new w,gi=new w,vi=new w,Ui=new w,qr=new w,Da=new w,Na=new w,Di=new w;function sn(e,t,i,r,a){for(let s=0,n=e.length-3;s<=n;s+=3){Di.fromArray(e,s);let o=a.x*Math.abs(Di.x)+a.y*Math.abs(Di.y)+a.z*Math.abs(Di.z),l=t.dot(Di),h=i.dot(Di),c=r.dot(Di);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var $d=new Qt,Yr=new w,nn=new w,Gt=class{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t===void 0?$d.setFromPoints(e).getCenter(i):i.copy(t);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);let t=Yr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Yr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(nn)),this.expandByPoint(Yr.copy(e.center).sub(nn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ni=new w,on=new w,Oa=new w,_i=new w,ln=new w,Fa=new w,hn=new w,hr=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){on.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(on);let a=e.distanceTo(t)*.5,s=-this.direction.dot(Oa),n=_i.dot(this.direction),o=-_i.dot(Oa),l=_i.lengthSq(),h=Math.abs(1-s*s),c,u,d,p;if(h>0)if(c=s*o-n,u=s*n-o,p=a*h,c>=0)if(u>=-p)if(u<=p){let g=1/h;c*=g,u*=g,d=c*(c+s*u+2*n)+u*(s*c+u+2*o)+l}else u=a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;else u<=-p?(c=Math.max(0,-(-s*a+n)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=p?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(s*a+n)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=s>0?-a:a,c=Math.max(0,-(s*u+n)),d=-c*c+u*(u+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(on).addScaledVector(Oa,u),d}intersectSphere(e,t){ni.subVectors(e.center,this.origin);let i=ni.dot(this.direction),r=ni.dot(ni)-i*i,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),n=i-s,o=i+s;return o<0?null:n<0?this.at(o,t):this.at(n,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,n,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),c>=0?(n=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(n=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),i>o||n>r)||((n>i||i!==i)&&(i=n),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,r,a){ln.subVectors(t,e),Fa.subVectors(i,e),hn.crossVectors(ln,Fa);let s=this.direction.dot(hn),n;if(s>0){if(r)return null;n=1}else if(s<0)n=-1,s=-s;else return null;_i.subVectors(this.origin,e);let o=n*this.direction.dot(Fa.crossVectors(_i,Fa));if(o<0)return null;let l=n*this.direction.dot(ln.cross(_i));if(l<0||o+l>s)return null;let h=-n*_i.dot(hn);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class Co{constructor(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,f){Co.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,f)}set(t,i,r,a,s,n,o,l,h,c,u,d,p,g,v,f){let m=this.elements;return m[0]=t,m[4]=i,m[8]=r,m[12]=a,m[1]=s,m[5]=n,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Co().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){let i=this.elements,r=t.elements,a=1/cr.setFromMatrixColumn(t,0).length(),s=1/cr.setFromMatrixColumn(t,1).length(),n=1/cr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[7]=0,i[8]=r[8]*n,i[9]=r[9]*n,i[10]=r[10]*n,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,s=t.z,n=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=n*c,p=n*u,g=o*c,v=o*u;i[0]=l*c,i[4]=-l*u,i[8]=h,i[1]=p+g*h,i[5]=d-v*h,i[9]=-o*l,i[2]=v-d*h,i[6]=g+p*h,i[10]=n*l}else if(t.order==="YXZ"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d+v*o,i[4]=g*o-p,i[8]=n*h,i[1]=n*u,i[5]=n*c,i[9]=-o,i[2]=p*o-g,i[6]=v+d*o,i[10]=n*l}else if(t.order==="ZXY"){let d=l*c,p=l*u,g=h*c,v=h*u;i[0]=d-v*o,i[4]=-n*u,i[8]=g+p*o,i[1]=p+g*o,i[5]=n*c,i[9]=v-d*o,i[2]=-n*h,i[6]=o,i[10]=n*l}else if(t.order==="ZYX"){let d=n*c,p=n*u,g=o*c,v=o*u;i[0]=l*c,i[4]=g*h-p,i[8]=d*h+v,i[1]=l*u,i[5]=v*h+d,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=n*l}else if(t.order==="YZX"){let d=n*l,p=n*h,g=o*l,v=o*h;i[0]=l*c,i[4]=v-d*u,i[8]=g*u+p,i[1]=u,i[5]=n*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*u+g,i[10]=d-v*u}else if(t.order==="XZY"){let d=n*l,p=n*h,g=o*l,v=o*h;i[0]=l*c,i[4]=-u,i[8]=h*c,i[1]=d*u+v,i[5]=n*c,i[9]=p*u-g,i[2]=g*u-p,i[6]=o*c,i[10]=v*u+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qd,t,ep)}lookAt(t,i,r){let a=this.elements;return Ot.subVectors(t,i),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),yi.crossVectors(r,Ot),yi.lengthSq()===0&&(Math.abs(r.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),yi.crossVectors(r,Ot)),yi.normalize(),Ba.crossVectors(Ot,yi),a[0]=yi.x,a[4]=Ba.x,a[8]=Ot.x,a[1]=yi.y,a[5]=Ba.y,a[9]=Ot.y,a[2]=yi.z,a[6]=Ba.z,a[10]=Ot.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[4],l=r[8],h=r[12],c=r[1],u=r[5],d=r[9],p=r[13],g=r[2],v=r[6],f=r[10],m=r[14],y=r[3],_=r[7],x=r[11],T=r[15],E=a[0],L=a[4],D=a[8],M=a[12],R=a[1],O=a[5],W=a[9],J=a[13],P=a[2],H=a[6],X=a[10],q=a[14],ae=a[3],j=a[7],U=a[11],F=a[15];return s[0]=n*E+o*R+l*P+h*ae,s[4]=n*L+o*O+l*H+h*j,s[8]=n*D+o*W+l*X+h*U,s[12]=n*M+o*J+l*q+h*F,s[1]=c*E+u*R+d*P+p*ae,s[5]=c*L+u*O+d*H+p*j,s[9]=c*D+u*W+d*X+p*U,s[13]=c*M+u*J+d*q+p*F,s[2]=g*E+v*R+f*P+m*ae,s[6]=g*L+v*O+f*H+m*j,s[10]=g*D+v*W+f*X+m*U,s[14]=g*M+v*J+f*q+m*F,s[3]=y*E+_*R+x*P+T*ae,s[7]=y*L+_*O+x*H+T*j,s[11]=y*D+_*W+x*X+T*U,s[15]=y*M+_*J+x*q+T*F,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],s=t[12],n=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],f=t[11],m=t[15];return g*(+s*l*u-a*h*u-s*o*d+r*h*d+a*o*p-r*l*p)+v*(+i*l*p-i*h*d+s*n*d-a*n*p+a*h*c-s*l*c)+f*(+i*h*u-i*o*p-s*n*u+r*n*p+s*o*c-r*h*c)+m*(-a*o*c-i*l*u+i*o*d+a*n*u-r*n*d+r*l*c)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],f=t[14],m=t[15],y=u*f*h-v*d*h+v*l*p-o*f*p-u*l*m+o*d*m,_=g*d*h-c*f*h-g*l*p+n*f*p+c*l*m-n*d*m,x=c*v*h-g*u*h+g*o*p-n*v*p-c*o*m+n*u*m,T=g*u*l-c*v*l-g*o*d+n*v*d+c*o*f-n*u*f,E=i*y+r*_+a*x+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/E;return t[0]=y*L,t[1]=(v*d*s-u*f*s-v*a*p+r*f*p+u*a*m-r*d*m)*L,t[2]=(o*f*s-v*l*s+v*a*h-r*f*h-o*a*m+r*l*m)*L,t[3]=(u*l*s-o*d*s-u*a*h+r*d*h+o*a*p-r*l*p)*L,t[4]=_*L,t[5]=(c*f*s-g*d*s+g*a*p-i*f*p-c*a*m+i*d*m)*L,t[6]=(g*l*s-n*f*s-g*a*h+i*f*h+n*a*m-i*l*m)*L,t[7]=(n*d*s-c*l*s+c*a*h-i*d*h-n*a*p+i*l*p)*L,t[8]=x*L,t[9]=(g*u*s-c*v*s-g*r*p+i*v*p+c*r*m-i*u*m)*L,t[10]=(n*v*s-g*o*s+g*r*h-i*v*h-n*r*m+i*o*m)*L,t[11]=(c*o*s-n*u*s-c*r*h+i*u*h+n*r*p-i*o*p)*L,t[12]=T*L,t[13]=(c*v*a-g*u*a+g*r*d-i*v*d-c*r*f+i*u*f)*L,t[14]=(g*o*a-n*v*a-g*r*l+i*v*l+n*r*f-i*o*f)*L,t[15]=(n*u*a-c*o*a+c*r*l-i*u*l-n*r*d+i*o*d)*L,this}scale(t){let i=this.elements,r=t.x,a=t.y,s=t.z;return i[0]*=r,i[4]*=a,i[8]*=s,i[1]*=r,i[5]*=a,i[9]*=s,i[2]*=r,i[6]*=a,i[10]*=s,i[3]*=r,i[7]*=a,i[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),s=1-r,n=t.x,o=t.y,l=t.z,h=s*n,c=s*o;return this.set(h*n+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*n,0,h*l-a*o,c*l+a*n,s*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,s,n){return this.set(1,r,s,0,t,1,n,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,s=i._x,n=i._y,o=i._z,l=i._w,h=s+s,c=n+n,u=o+o,d=s*h,p=s*c,g=s*u,v=n*c,f=n*u,m=o*u,y=l*h,_=l*c,x=l*u,T=r.x,E=r.y,L=r.z;return a[0]=(1-(v+m))*T,a[1]=(p+x)*T,a[2]=(g-_)*T,a[3]=0,a[4]=(p-x)*E,a[5]=(1-(d+m))*E,a[6]=(f+y)*E,a[7]=0,a[8]=(g+_)*L,a[9]=(f-y)*L,a[10]=(1-(d+v))*L,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements,s=cr.set(a[0],a[1],a[2]).length(),n=cr.set(a[4],a[5],a[6]).length(),o=cr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],Xt.copy(this);let l=1/s,h=1/n,c=1/o;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=c,Xt.elements[9]*=c,Xt.elements[10]*=c,i.setFromRotationMatrix(Xt),r.x=s,r.y=n,r.z=o,this}makePerspective(t,i,r,a,s,n,o=tr){let l=this.elements,h=2*s/(i-t),c=2*s/(r-a),u=(i+t)/(i-t),d=(r+a)/(r-a),p,g;if(o===2e3)p=-(n+s)/(n-s),g=-2*n*s/(n-s);else if(o===2001)p=-n/(n-s),g=-n*s/(n-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,r,a,s,n,o=tr){let l=this.elements,h=1/(i-t),c=1/(r-a),u=1/(n-s),d=(i+t)*h,p=(r+a)*c,g,v;if(o===2e3)g=(n+s)*u,v=-2*u;else if(o===2001)g=s*u,v=-1*u;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},cr=new w,Xt=new Ne,Qd=new w(0,0,0),ep=new w(1,1,1),yi=new w,Ba=new w,Ot=new w,tl=new Ne,il=new wt,za=class Bc{constructor(t=0,i=0,r=0,a=Bc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,s=a[0],n=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-at(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-n,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-n,h));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-at(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return tl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tl,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return il.setFromEuler(this),this.setFromQuaternion(il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};za.DEFAULT_ORDER="XYZ";var Ha=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},tp=0,rl=new w,ur=new wt,oi=new Ne,ka=new w,Zr=new w,ip=new w,rp=new wt,al=new w(1,0,0),sl=new w(0,1,0),nl=new w(0,0,1),ap={type:"added"},sp={type:"removed"},Ke=class Os extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Nt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Os.DEFAULT_UP.clone();let t=new w,i=new za,r=new wt,a=new w(1,1,1);function s(){r.setFromEuler(i,!1)}function n(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ne},normalMatrix:{value:new He}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=Os.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Os.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ur.setFromAxisAngle(t,i),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,i){return ur.setFromAxisAngle(t,i),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(al,t)}rotateY(t){return this.rotateOnAxis(sl,t)}rotateZ(t){return this.rotateOnAxis(nl,t)}translateOnAxis(t,i){return rl.copy(t).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(al,t)}translateY(t){return this.translateOnAxis(sl,t)}translateZ(t){return this.translateOnAxis(nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ka.copy(t):ka.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Zr,ka,this.up):oi.lookAt(ka,Zr,this.up),this.quaternion.setFromRotationMatrix(oi),a&&(oi.extractRotation(a.matrixWorld),ur.setFromRotationMatrix(oi),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ap)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(sp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let s=this.children[r].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i){let r=[];this[t]===i&&r.push(this);for(let a=0,s=this.children.length;a<s;a++){let n=this.children[a].getObjectsByProperty(t,i);n.length>0&&(r=r.concat(n))}return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,t,ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++){let s=i[r];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let a=this.children;for(let s=0,n=a.length;s<n;s++){let o=a[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(i){let o=n(t.geometries),l=n(t.materials),h=n(t.textures),c=n(t.images),u=n(t.shapes),d=n(t.skeletons),p=n(t.animations),g=n(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function n(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};Ke.DEFAULT_UP=new w(0,1,0),Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=new w,li=new w,cn=new w,hi=new w,dr=new w,pr=new w,ol=new w,un=new w,dn=new w,pn=new w,Ga=!1,Ni=class $i{constructor(t=new w,i=new w,r=new w){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),jt.subVectors(t,i),a.cross(jt);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,i,r,a,s){jt.subVectors(a,i),li.subVectors(r,i),cn.subVectors(t,i);let n=jt.dot(jt),o=jt.dot(li),l=jt.dot(cn),h=li.dot(li),c=li.dot(cn),u=n*h-o*o;if(u===0)return s.set(-2,-1,-1);let d=1/u,p=(h*l-o*c)*d,g=(n*c-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,hi),hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(t,i,r,a,s,n,o,l){return Ga===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ga=!0),this.getInterpolation(t,i,r,a,s,n,o,l)}static getInterpolation(t,i,r,a,s,n,o,l){return this.getBarycoord(t,i,r,a,hi),l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(n,hi.y),l.addScaledVector(o,hi.z),l}static isFrontFacing(t,i,r,a){return jt.subVectors(r,i),li.subVectors(t,i),jt.cross(li).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jt.subVectors(this.c,this.b),li.subVectors(this.a,this.b),jt.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return $i.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,r,a,s){return Ga===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ga=!0),$i.getInterpolation(t,this.a,this.b,this.c,i,r,a,s)}getInterpolation(t,i,r,a,s){return $i.getInterpolation(t,this.a,this.b,this.c,i,r,a,s)}containsPoint(t){return $i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,s=this.c,n,o;dr.subVectors(a,r),pr.subVectors(s,r),un.subVectors(t,r);let l=dr.dot(un),h=pr.dot(un);if(l<=0&&h<=0)return i.copy(r);dn.subVectors(t,a);let c=dr.dot(dn),u=pr.dot(dn);if(c>=0&&u<=c)return i.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return n=l/(l-c),i.copy(r).addScaledVector(dr,n);pn.subVectors(t,s);let p=dr.dot(pn),g=pr.dot(pn);if(g>=0&&p<=g)return i.copy(s);let v=p*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(pr,o);let f=c*g-p*u;if(f<=0&&u-c>=0&&p-g>=0)return ol.subVectors(s,a),o=(u-c)/(u-c+(p-g)),i.copy(a).addScaledVector(ol,o);let m=1/(f+v+d);return n=v*m,o=d*m,i.copy(r).addScaledVector(dr,n).addScaledVector(pr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Va={h:0,s:0,l:0};function mn(e,t,i){return i<0&&(i+=1),i>1&&--i,i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Js(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=mn(s,a,e+1/3),this.g=mn(s,a,e),this.b=mn(s,a,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=yt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=r[1],n=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let i=ll[e.toLowerCase()];return i===void 0?console.warn("THREE.Color: Unknown color "+e):this.setHex(i,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Je.fromWorkingColorSpace(bt.copy(this),e),Math.round(at(bt.r*255,0,255))*65536+Math.round(at(bt.g*255,0,255))*256+Math.round(at(bt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(bt.copy(this),t);let i=bt.r,r=bt.g,a=bt.b,s=Math.max(i,r,a),n=Math.min(i,r,a),o,l,h=(n+s)/2;if(n===s)o=0,l=0;else{let c=s-n;switch(l=h<=.5?c/(s+n):c/(2-s-n),s){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=yt){Je.fromWorkingColorSpace(bt.copy(this),e);let t=bt.r,i=bt.g,r=bt.b;return e==="srgb"?`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Va);let i=Wr(xi.h,Va.h,t),r=Wr(xi.s,Va.s,t),a=Wr(xi.l,Va.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bt=new pe;pe.NAMES=ll;var np=0,xt=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Nt(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let s=[];for(let n in a){let o=a[n];delete o.metadata,s.push(o)}return s}if(t){let a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ci=class extends xt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ui=op();function op(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,a[l]=-h-1,a[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,a[l]=13,a[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let s=new Uint32Array(2048),n=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(h&8388608);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,s[l]=h|c}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)n[l]=l<<23;n[31]=1199570944,n[32]=2147483648;for(let l=33;l<63;++l)n[l]=2147483648+(l-32<<23);n[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:s,exponentTable:n,offsetTable:o}}function It(e){Math.abs(e)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),e=at(e,-65504,65504),ui.floatView[0]=e;let t=ui.uint32View[0],i=t>>23&511;return ui.baseTable[i]+((t&8388607)>>ui.shiftTable[i])}function Jr(e){let t=e>>10;return ui.uint32View[0]=ui.mantissaTable[ui.offsetTable[t]+(e&1023)]+ui.exponentTable[t],ui.floatView[0]}var lp={toHalfFloat:It,fromHalfFloat:Jr},ht=new w,Wa=new Z,Qe=class{constructor(e,t,i=!1){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=i,this.usage=Ca,this.updateRange={offset:0,count:-1},this.gpuType=Sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=De(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pt(t,this.array)),t}setX(e,t){return this.normalized&&(t=De(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pt(t,this.array)),t}setY(e,t){return this.normalized&&(t=De(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=De(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pt(t,this.array)),t}setW(e,t){return this.normalized&&(t=De(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=De(t,this.array),i=De(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=De(t,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=De(t,this.array),i=De(i,this.array),r=De(r,this.array),a=De(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}},hp=class extends Qe{constructor(e,t,i){super(new Int8Array(e),t,i)}},cp=class extends Qe{constructor(e,t,i){super(new Uint8Array(e),t,i)}},up=class extends Qe{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}},dp=class extends Qe{constructor(e,t,i){super(new Int16Array(e),t,i)}},fn=class extends Qe{constructor(e,t,i){super(new Uint16Array(e),t,i)}},pp=class extends Qe{constructor(e,t,i){super(new Int32Array(e),t,i)}},gn=class extends Qe{constructor(e,t,i){super(new Uint32Array(e),t,i)}},mp=class extends Qe{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Jr(this.array[e*this.itemSize]);return this.normalized&&(t=Pt(t,this.array)),t}setX(e,t){return this.normalized&&(t=De(t,this.array)),this.array[e*this.itemSize]=It(t),this}getY(e){let t=Jr(this.array[e*this.itemSize+1]);return this.normalized&&(t=Pt(t,this.array)),t}setY(e,t){return this.normalized&&(t=De(t,this.array)),this.array[e*this.itemSize+1]=It(t),this}getZ(e){let t=Jr(this.array[e*this.itemSize+2]);return this.normalized&&(t=Pt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=De(t,this.array)),this.array[e*this.itemSize+2]=It(t),this}getW(e){let t=Jr(this.array[e*this.itemSize+3]);return this.normalized&&(t=Pt(t,this.array)),t}setW(e,t){return this.normalized&&(t=De(t,this.array)),this.array[e*this.itemSize+3]=It(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=De(t,this.array),i=De(i,this.array)),this.array[e+0]=It(t),this.array[e+1]=It(i),this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=De(t,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[e+0]=It(t),this.array[e+1]=It(i),this.array[e+2]=It(r),this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=De(t,this.array),i=De(i,this.array),r=De(r,this.array),a=De(a,this.array)),this.array[e+0]=It(t),this.array[e+1]=It(i),this.array[e+2]=It(r),this.array[e+3]=It(a),this}},ge=class extends Qe{constructor(e,t,i){super(new Float32Array(e),t,i)}},fp=class extends Qe{constructor(e,t,i){super(new Float64Array(e),t,i)}},gp=0,Vt=new Ne,vn=new Ke,mr=new w,Ft=new Qt,Kr=new Qt,gt=new w,ke=class zc extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Nt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return this.index=Array.isArray(t)?new(Yo(t)?gn:fn)(t,1):t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let s=new He().getNormalMatrix(t);r.applyNormalMatrix(s),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vt.makeRotationFromQuaternion(t),this.applyMatrix4(Vt),this}rotateX(t){return Vt.makeRotationX(t),this.applyMatrix4(Vt),this}rotateY(t){return Vt.makeRotationY(t),this.applyMatrix4(Vt),this}rotateZ(t){return Vt.makeRotationZ(t),this.applyMatrix4(Vt),this}translate(t,i,r){return Vt.makeTranslation(t,i,r),this.applyMatrix4(Vt),this}scale(t,i,r){return Vt.makeScale(t,i,r),this.applyMatrix4(Vt),this}lookAt(t){return vn.lookAt(t),vn.updateMatrix(),this.applyMatrix4(vn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(t){let i=[];for(let r=0,a=t.length;r<a;r++){let s=t[r];i.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ge(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));else{if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let s=i[r];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gt);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);else if(t){let r=this.boundingSphere.center;if(Ft.setFromBufferAttribute(t),i)for(let s=0,n=i.length;s<n;s++){let o=i[s];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Ft.min,Kr.min),Ft.expandByPoint(gt),gt.addVectors(Ft.max,Kr.max),Ft.expandByPoint(gt)):(Ft.expandByPoint(Kr.min),Ft.expandByPoint(Kr.max))}Ft.getCenter(r);let a=0;for(let s=0,n=t.count;s<n;s++)gt.fromBufferAttribute(t,s),a=Math.max(a,r.distanceToSquared(gt));if(i)for(let s=0,n=i.length;s<n;s++){let o=i[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)gt.fromBufferAttribute(o,h),l&&(mr.fromBufferAttribute(t,h),gt.add(mr)),a=Math.max(a,r.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=t.array,a=i.position.array,s=i.normal.array,n=i.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,h=[],c=[];for(let R=0;R<o;R++)h[R]=new w,c[R]=new w;let u=new w,d=new w,p=new w,g=new Z,v=new Z,f=new Z,m=new w,y=new w;function _(R,O,W){u.fromArray(a,R*3),d.fromArray(a,O*3),p.fromArray(a,W*3),g.fromArray(n,R*2),v.fromArray(n,O*2),f.fromArray(n,W*2),d.sub(u),p.sub(u),v.sub(g),f.sub(g);let J=1/(v.x*f.y-f.x*v.y);isFinite(J)&&(m.copy(d).multiplyScalar(f.y).addScaledVector(p,-v.y).multiplyScalar(J),y.copy(p).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(J),h[R].add(m),h[O].add(m),h[W].add(m),c[R].add(y),c[O].add(y),c[W].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:r.length}]);for(let R=0,O=x.length;R<O;++R){let W=x[R],J=W.start,P=W.count;for(let H=J,X=J+P;H<X;H+=3)_(r[H+0],r[H+1],r[H+2])}let T=new w,E=new w,L=new w,D=new w;function M(R){L.fromArray(s,R*3),D.copy(L);let O=h[R];T.copy(O),T.sub(L.multiplyScalar(L.dot(O))).normalize(),E.crossVectors(D,O);let W=E.dot(c[R])<0?-1:1;l[R*4]=T.x,l[R*4+1]=T.y,l[R*4+2]=T.z,l[R*4+3]=W}for(let R=0,O=x.length;R<O;++R){let W=x[R],J=W.start,P=W.count;for(let H=J,X=J+P;H<X;H+=3)M(r[H+0]),M(r[H+1]),M(r[H+2])}}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Qe(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,p=r.count;d<p;d++)r.setXYZ(d,0,0,0);let a=new w,s=new w,n=new w,o=new w,l=new w,h=new w,c=new w,u=new w;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),v=t.getX(d+1),f=t.getX(d+2);a.fromBufferAttribute(i,g),s.fromBufferAttribute(i,v),n.fromBufferAttribute(i,f),c.subVectors(n,s),u.subVectors(a,s),c.cross(u),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),h.fromBufferAttribute(r,f),o.add(c),l.add(c),h.add(c),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(f,h.x,h.y,h.z)}else for(let d=0,p=i.count;d<p;d+=3)a.fromBufferAttribute(i,d+0),s.fromBufferAttribute(i,d+1),n.fromBufferAttribute(i,d+2),c.subVectors(n,s),u.subVectors(a,s),c.cross(u),r.setXYZ(d+0,c.x,c.y,c.z),r.setXYZ(d+1,c.x,c.y,c.z),r.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gt.fromBufferAttribute(t,i),gt.normalize(),t.setXYZ(i,gt.x,gt.y,gt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,g=0;for(let v=0,f=l.length;v<f;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*c;for(let m=0;m<c;m++)d[g++]=h[p++]}return new Qe(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new zc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let s=this.morphAttributes;for(let o in s){let l=[],h=s[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],p=t(d,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let o=0,l=n.length;o<l;o++){let h=n[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(t.data.groups=JSON.parse(JSON.stringify(n)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone(i));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let s=t.morphAttributes;for(let h in s){let c=[],u=s[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let n=t.groups;for(let h=0,c=n.length;h<c;h++){let u=n[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hl=new Ne,Oi=new hr,Xa=new Gt,cl=new w,fr=new w,gr=new w,vr=new w,_n=new w,ja=new w,qa=new Z,Ya=new Z,Za=new Z,ul=new w,dl=new w,pl=new w,Ja=new w,Ka=new w,vt=class extends Ke{constructor(e=new ke,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let n=this.morphTargetInfluences;if(a&&n){ja.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=n[o],c=a[o];h!==0&&(_n.fromBufferAttribute(c,e),s?ja.addScaledVector(_n,h):ja.addScaledVector(_n.sub(t),h))}t.add(ja)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(a),Oi.copy(e.ray).recast(e.near),!(Xa.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Xa,cl)===null||Oi.origin.distanceToSquared(cl)>(e.far-e.near)**2))&&(hl.copy(a).invert(),Oi.copy(e.ray).applyMatrix4(hl),(i.boundingBox===null||Oi.intersectsBox(i.boundingBox)!==!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let r,a=this.geometry,s=this.material,n=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(n!==null)if(Array.isArray(s))for(let p=0,g=u.length;p<g;p++){let v=u[p],f=s[v.materialIndex],m=Math.max(v.start,d.start),y=Math.min(n.count,Math.min(v.start+v.count,d.start+d.count));for(let _=m,x=y;_<x;_+=3){let T=n.getX(_),E=n.getX(_+1),L=n.getX(_+2);r=$a(this,f,e,i,l,h,c,T,E,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(n.count,d.start+d.count);for(let v=p,f=g;v<f;v+=3){let m=n.getX(v),y=n.getX(v+1),_=n.getX(v+2);r=$a(this,s,e,i,l,h,c,m,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,g=u.length;p<g;p++){let v=u[p],f=s[v.materialIndex],m=Math.max(v.start,d.start),y=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let _=m,x=y;_<x;_+=3){let T=_,E=_+1,L=_+2;r=$a(this,f,e,i,l,h,c,T,E,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let v=p,f=g;v<f;v+=3){let m=v,y=v+1,_=v+2;r=$a(this,s,e,i,l,h,c,m,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}};function vp(e,t,i,r,a,s,n,o){let l;if(l=t.side===1?r.intersectTriangle(n,s,a,!0,o):r.intersectTriangle(a,s,n,t.side===0,o),l===null)return null;Ka.copy(o),Ka.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(Ka);return h<i.near||h>i.far?null:{distance:h,point:Ka.clone(),object:e}}function $a(e,t,i,r,a,s,n,o,l,h){e.getVertexPosition(o,fr),e.getVertexPosition(l,gr),e.getVertexPosition(h,vr);let c=vp(e,t,i,r,fr,gr,vr,Ja);if(c){a&&(qa.fromBufferAttribute(a,o),Ya.fromBufferAttribute(a,l),Za.fromBufferAttribute(a,h),c.uv=Ni.getInterpolation(Ja,fr,gr,vr,qa,Ya,Za,new Z)),s&&(qa.fromBufferAttribute(s,o),Ya.fromBufferAttribute(s,l),Za.fromBufferAttribute(s,h),c.uv1=Ni.getInterpolation(Ja,fr,gr,vr,qa,Ya,Za,new Z),c.uv2=c.uv1),n&&(ul.fromBufferAttribute(n,o),dl.fromBufferAttribute(n,l),pl.fromBufferAttribute(n,h),c.normal=Ni.getInterpolation(Ja,fr,gr,vr,ul,dl,pl,new w),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new w,materialIndex:0};Ni.getNormal(fr,gr,vr,u.normal),c.face=u}return c}var _r=class Hc extends ke{constructor(t=1,i=1,r=1,a=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:s,depthSegments:n};let o=this;a=Math.floor(a),s=Math.floor(s),n=Math.floor(n);let l=[],h=[],c=[],u=[],d=0,p=0;g("z","y","x",-1,-1,r,i,t,n,s,0),g("z","y","x",1,-1,r,i,-t,n,s,1),g("x","z","y",1,1,t,r,i,a,n,2),g("x","z","y",1,-1,t,r,-i,a,n,3),g("x","y","z",1,-1,t,i,r,a,s,4),g("x","y","z",-1,-1,t,i,-r,a,s,5),this.setIndex(l),this.setAttribute("position",new ge(h,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(u,2));function g(v,f,m,y,_,x,T,E,L,D,M){let R=x/L,O=T/D,W=x/2,J=T/2,P=E/2,H=L+1,X=D+1,q=0,ae=0,j=new w;for(let U=0;U<X;U++){let F=U*O-J;for(let Q=0;Q<H;Q++)j[v]=(Q*R-W)*y,j[f]=F*_,j[m]=P,h.push(j.x,j.y,j.z),j[v]=0,j[f]=0,j[m]=E>0?1:-1,c.push(j.x,j.y,j.z),u.push(Q/L),u.push(1-U/D),q+=1}for(let U=0;U<D;U++)for(let F=0;F<L;F++){let Q=d+F+H*U,ue=d+F+H*(U+1),me=d+(F+1)+H*(U+1),Te=d+(F+1)+H*U;l.push(Q,ue,Te),l.push(ue,me,Te),ae+=6}o.addGroup(p,ae,M),p+=ae,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function yr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}}return t}function At(e){let t={};for(let i=0;i<e.length;i++){let r=yr(e[i]);for(let a in r)t[a]=r[a]}return t}function _p(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function ml(e){return e.getRenderTarget()===null?e.outputColorSpace:Je.workingColorSpace}var fl={clone:yr,merge:At},yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qt=class extends xt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yp,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Qa=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_t=class extends Qa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let o=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/o,t-=s.offsetY*i/l,r*=s.width/o,i*=s.height/l}let n=this.filmOffset;n!==0&&(a+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xr=-90,Mr=1,gl=class extends Ke{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new _t(xr,Mr,e,t);r.layers=this.layers,this.add(r);let a=new _t(xr,Mr,e,t);a.layers=this.layers,this.add(a);let s=new _t(xr,Mr,e,t);s.layers=this.layers,this.add(s);let n=new _t(xr,Mr,e,t);n.layers=this.layers,this.add(n);let o=new _t(xr,Mr,e,t);o.layers=this.layers,this.add(o);let l=new _t(xr,Mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,n,o]=t;for(let l of t)this.remove(l);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,n,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,n),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},$r=class extends ft{constructor(e,t,i,r,a,s,n,o,l,h){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,i,r,a,s,n,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vl=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(jr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===3001?yt:""),this.texture=new $r(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?mt:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _r(5,5,5),a=new qt({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let s=new vt(r,a),n=t.minFilter;return t.minFilter===1008&&(t.minFilter=mt),new gl(1,10,this).update(e,s),t.minFilter=n,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}},yn=new w,Mp=new w,Sp=new He,di=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=yn.subVectors(i,t).cross(Mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(yn),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sp.getNormalMatrix(e),r=this.coplanarPoint(yn).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new Gt,es=new w,Qr=class{constructor(e=new di,t=new di,i=new di,r=new di,a=new di,s=new di){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(r),n[4].copy(a),n[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=tr){let i=this.planes,r=e.elements,a=r[0],s=r[1],n=r[2],o=r[3],l=r[4],h=r[5],c=r[6],u=r[7],d=r[8],p=r[9],g=r[10],v=r[11],f=r[12],m=r[13],y=r[14],_=r[15];if(i[0].setComponents(o-a,u-l,v-d,_-f).normalize(),i[1].setComponents(o+a,u+l,v+d,_+f).normalize(),i[2].setComponents(o+s,u+h,v+p,_+m).normalize(),i[3].setComponents(o-s,u-h,v-p,_-m).normalize(),i[4].setComponents(o-n,u-c,v-g,_-y).normalize(),t===2e3)i[5].setComponents(o+n,u+c,v+g,_+y).normalize();else if(t===2001)i[5].setComponents(n,c,g,y).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(es.x=r.normal.x>0?e.max.x:e.min.x,es.y=r.normal.y>0?e.max.y:e.min.y,es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _l(){let e=null,t=!1,i=null,r=null;function a(s,n){i(s,n),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&i!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function bp(e,t){let i=t.isWebGL2,r=new WeakMap;function a(h,c){let u=h.array,d=h.usage,p=e.createBuffer();e.bindBuffer(c,p),e.bufferData(c,u,d),h.onUploadCallback();let g;if(u instanceof Float32Array)g=e.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(i)g=e.HALF_FLOAT;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=e.SHORT;else if(u instanceof Uint32Array)g=e.UNSIGNED_INT;else if(u instanceof Int32Array)g=e.INT;else if(u instanceof Int8Array)g=e.BYTE;else if(u instanceof Uint8Array)g=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version}}function s(h,c,u){let d=c.array,p=c.updateRange;e.bindBuffer(u,h),p.count===-1?e.bufferSubData(u,0,d):(i?e.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):e.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function n(h){return h.isInterleavedBufferAttribute&&(h=h.data),r.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let c=r.get(h);c&&(e.deleteBuffer(c.buffer),r.delete(h))}function l(h,c){if(h.isGLBufferAttribute){let d=r.get(h);(!d||d.version<h.version)&&r.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let u=r.get(h);u===void 0?r.set(h,a(h,c)):u.version<h.version&&(s(u.buffer,h,c),u.version=h.version)}return{get:n,remove:o,update:l}}var ts=class kc extends ke{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let s=t/2,n=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,u=t/o,d=i/l,p=[],g=[],v=[],f=[];for(let m=0;m<c;m++){let y=m*d-n;for(let _=0;_<h;_++){let x=_*u-s;g.push(x,-y,0),v.push(0,0,1),f.push(_/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let _=y+h*m,x=y+h*(m+1),T=y+1+h*(m+1),E=y+1+h*m;p.push(_,x,E),p.push(x,T,E)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(v,3)),this.setAttribute("uv",new ge(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.width,t.height,t.widthSegments,t.heightSegments)}},Ie={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ce={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Yt={basic:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new pe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:At([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:At([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new pe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:At([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:At([ce.points,ce.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:At([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:At([ce.common,ce.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:At([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:At([ce.sprite,ce.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:At([ce.common,ce.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:At([ce.lights,ce.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Yt.physical={uniforms:At([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};var is={r:0,b:0,g:0};function Tp(e,t,i,r,a,s,n){let o=new pe(0),l=s===!0?0:1,h,c,u=null,d=0,p=null;function g(f,m){let y=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?i:t).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),y=!0);let x=e.xr.getEnvironmentBlendMode();x==="additive"?r.buffers.color.setClear(0,0,0,1,n):x==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,n),(e.autoClear||y)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(c===void 0&&(c=new vt(new _r(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:yr(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Je.getTransfer(_.colorSpace)!==Vr,(u!==_||d!==_.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=e.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new vt(new ts(2,2),new qt({name:"BackgroundMaterial",uniforms:yr(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Je.getTransfer(_.colorSpace)!==Vr,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=e.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null))}function v(f,m){f.getRGB(is,ml(e)),r.buffers.color.setClear(is.r,is.g,is.b,m,n)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),l=m,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(o,l)},render:g}}function Ep(e,t,i,r){let a=e.getParameter(e.MAX_VERTEX_ATTRIBS),s=r.isWebGL2?null:t.get("OES_vertex_array_object"),n=r.isWebGL2||s!==null,o={},l=f(null),h=l,c=!1;function u(P,H,X,q,ae){let j=!1;if(n){let U=v(q,X,H);h!==U&&(h=U,p(h.object)),j=m(P,q,X,ae),j&&y(P,q,X,ae)}else{let U=H.wireframe===!0;(h.geometry!==q.id||h.program!==X.id||h.wireframe!==U)&&(h.geometry=q.id,h.program=X.id,h.wireframe=U,j=!0)}ae!==null&&i.update(ae,e.ELEMENT_ARRAY_BUFFER),(j||c)&&(c=!1,D(P,H,X,q),ae!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,i.get(ae).buffer))}function d(){return r.isWebGL2?e.createVertexArray():s.createVertexArrayOES()}function p(P){return r.isWebGL2?e.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return r.isWebGL2?e.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function v(P,H,X){let q=X.wireframe===!0,ae=o[P.id];ae===void 0&&(ae={},o[P.id]=ae);let j=ae[H.id];j===void 0&&(j={},ae[H.id]=j);let U=j[q];return U===void 0&&(U=f(d()),j[q]=U),U}function f(P){let H=[],X=[],q=[];for(let ae=0;ae<a;ae++)H[ae]=0,X[ae]=0,q[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:X,attributeDivisors:q,object:P,attributes:{},index:null}}function m(P,H,X,q){let ae=h.attributes,j=H.attributes,U=0,F=X.getAttributes();for(let Q in F)if(F[Q].location>=0){let ue=ae[Q],me=j[Q];if(me===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(me=P.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;U++}return h.attributesNum!==U||h.index!==q}function y(P,H,X,q){let ae={},j=H.attributes,U=0,F=X.getAttributes();for(let Q in F)if(F[Q].location>=0){let ue=j[Q];ue===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor));let me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),ae[Q]=me,U++}h.attributes=ae,h.attributesNum=U,h.index=q}function _(){let P=h.newAttributes;for(let H=0,X=P.length;H<X;H++)P[H]=0}function x(P){T(P,0)}function T(P,H){let X=h.newAttributes,q=h.enabledAttributes,ae=h.attributeDivisors;X[P]=1,q[P]===0&&(e.enableVertexAttribArray(P),q[P]=1),ae[P]!==H&&((r.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,H),ae[P]=H)}function E(){let P=h.newAttributes,H=h.enabledAttributes;for(let X=0,q=H.length;X<q;X++)H[X]!==P[X]&&(e.disableVertexAttribArray(X),H[X]=0)}function L(P,H,X,q,ae,j,U){U===!0?e.vertexAttribIPointer(P,H,X,ae,j):e.vertexAttribPointer(P,H,X,q,ae,j)}function D(P,H,X,q){if(r.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let ae=q.attributes,j=X.getAttributes(),U=H.defaultAttributeValues;for(let F in j){let Q=j[F];if(Q.location>=0){let ue=ae[F];if(ue===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),ue!==void 0){let me=ue.normalized,Te=ue.itemSize,Oe=i.get(ue);if(Oe===void 0)continue;let we=Oe.buffer,je=Oe.type,Ue=Oe.bytesPerElement,qe=r.isWebGL2===!0&&(je===e.INT||je===e.UNSIGNED_INT||ue.gpuType===1013);if(ue.isInterleavedBufferAttribute){let C=ue.data,oe=C.stride,$=ue.offset;if(C.isInstancedInterleavedBuffer){for(let K=0;K<Q.locationSize;K++)T(Q.location+K,C.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let K=0;K<Q.locationSize;K++)x(Q.location+K);e.bindBuffer(e.ARRAY_BUFFER,we);for(let K=0;K<Q.locationSize;K++)L(Q.location+K,Te/Q.locationSize,je,me,oe*Ue,($+Te/Q.locationSize*K)*Ue,qe)}else{if(ue.isInstancedBufferAttribute){for(let C=0;C<Q.locationSize;C++)T(Q.location+C,ue.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let C=0;C<Q.locationSize;C++)x(Q.location+C);e.bindBuffer(e.ARRAY_BUFFER,we);for(let C=0;C<Q.locationSize;C++)L(Q.location+C,Te/Q.locationSize,je,me,Te*Ue,Te/Q.locationSize*C*Ue,qe)}}else if(U!==void 0){let me=U[F];if(me!==void 0)switch(me.length){case 2:e.vertexAttrib2fv(Q.location,me);break;case 3:e.vertexAttrib3fv(Q.location,me);break;case 4:e.vertexAttrib4fv(Q.location,me);break;default:e.vertexAttrib1fv(Q.location,me)}}}}E()}function M(){W();for(let P in o){let H=o[P];for(let X in H){let q=H[X];for(let ae in q)g(q[ae].object),delete q[ae];delete H[X]}delete o[P]}}function R(P){if(o[P.id]===void 0)return;let H=o[P.id];for(let X in H){let q=H[X];for(let ae in q)g(q[ae].object),delete q[ae];delete H[X]}delete o[P.id]}function O(P){for(let H in o){let X=o[H];if(X[P.id]===void 0)continue;let q=X[P.id];for(let ae in q)g(q[ae].object),delete q[ae];delete X[P.id]}}function W(){J(),c=!0,h!==l&&(h=l,p(h.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:x,disableUnusedAttributes:E}}function wp(e,t,i,r){let a=r.isWebGL2,s;function n(h){s=h}function o(h,c){e.drawArrays(s,h,c),i.update(c,s,1)}function l(h,c,u){if(u===0)return;let d,p;if(a)d=e,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,h,c,u),i.update(c,s,u)}this.setMode=n,this.render=o,this.renderInstances=l}function Ap(e,t,i){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(L){if(L==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let n=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext",o=i.precision===void 0?"highp":i.precision,l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let h=n||t.has("WEBGL_draw_buffers"),c=i.logarithmicDepthBuffer===!0,u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),f=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),m=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,x=n||t.has("OES_texture_float"),T=_&&x,E=n?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:n,drawBuffers:h,getMaxAnisotropy:a,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:T,maxSamples:E}}function Rp(e){let t=this,i=null,r=0,a=!1,s=!1,n=new di,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||r!==0||a;return a=d,r=u.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){i=c(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,m=e.get(u);if(!a||g===null||g.length===0||s&&!f)s?c(null):h();else{let y=s?0:r,_=y*4,x=m.clippingState||null;l.value=x,x=c(g,d,_,p);for(let T=0;T!==_;++T)x[T]=i[T];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(u,d,p,g){let v=u===null?0:u.length,f=null;if(v!==0){if(f=l.value,g!==!0||f===null){let m=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<m)&&(f=new Float32Array(m));for(let _=0,x=p;_!==v;++_,x+=4)n.copy(u[_]).applyMatrix4(y,o),n.normal.toArray(f,x),f[x+3]=n.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function Cp(e){let t=new WeakMap;function i(n,o){return o===303?n.mapping=301:o===304&&(n.mapping=302),n}function r(n){if(n&&n.isTexture&&n.isRenderTargetTexture===!1){let o=n.mapping;if(o===303||o===304){if(t.has(n)){let l=t.get(n).texture;return i(l,n.mapping)}{let l=n.image;if(l&&l.height>0){let h=new vl(l.height/2);return h.fromEquirectangularTexture(e,n),t.set(n,h),n.addEventListener("dispose",a),i(h.texture,n.mapping)}return null}}}return n}function a(n){let o=n.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:r,dispose:s}}var ea=class extends Qa{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,s=i+e,n=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,n-=h*this.view.offsetY,o=n-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,n,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sr=4,yl=[.125,.215,.35,.446,.526,.582],br=20,xn=new ea,xl=new pe,Mn=null,Sn=0,bn=0,Bi=(1+Math.sqrt(5))/2,Tr=1/Bi,Ml=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Bi,Tr),new w(0,Bi,-Tr),new w(Tr,0,Bi),new w(-Tr,0,Bi),new w(Bi,Tr,0),new w(-Bi,Tr,0)],Tn=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Mn=this._renderer.getRenderTarget(),Sn=this._renderer.getActiveCubeFace(),bn=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mn,Sn,bn),e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mn=this._renderer.getRenderTarget(),Sn=this._renderer.getActiveCubeFace(),bn=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:ba,format:Ri,colorSpace:ri,depthBuffer:!1},r=Sl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lp(a)),this._blurMaterial=Pp(a,e,t)}return r}_compileMaterial(e){let t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,xn)}_sceneToCubeUV(e,t,i,r){let a=new _t(90,1,t,i),s=[1,-1,1,1,1,1],n=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(xl),o.toneMapping=0,o.autoClear=!1;let c=new ci({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new vt(new _r,c),d=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,d=!0):(c.color.copy(xl),d=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,s[g],0),a.lookAt(n[g],0,0)):v===1?(a.up.set(0,0,s[g]),a.lookAt(0,n[g],0)):(a.up.set(0,s[g],0),a.lookAt(0,0,n[g]));let f=this._cubeSize;rs(r,v*f,g>2?f:0,f,f),o.setRenderTarget(r),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bl());let a=r?this._cubemapMaterial:this._equirectMaterial,s=new vt(this._lodPlanes[0],a),n=a.uniforms;n.envMap.value=e;let o=this._cubeSize;rs(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,xn)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Ml[(r-1)%Ml.length];this._blur(e,r-1,r,a,s)}t.autoClear=i}_blur(e,t,i,r,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,n){let o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new vt(this._lodPlanes[r],l),c=l.uniforms,u=this._sizeLods[i]-1,d=isFinite(a)?Math.PI/(2*u):2*Math.PI/39,p=a/d,g=isFinite(a)?1+Math.floor(3*p):br;g>br&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${br}`);let v=[],f=0;for(let _=0;_<br;++_){let x=_/p,T=Math.exp(-x*x/2);v.push(T),_===0?f+=T:_<g&&(f+=2*T)}for(let _=0;_<v.length;_++)v[_]=v[_]/f;c.envMap.value=e.texture,c.samples.value=g,c.weights.value=v,c.latitudinal.value=s==="latitudinal",n&&(c.poleAxis.value=n);let{_lodMax:m}=this;c.dTheta.value=d,c.mipInt.value=m-i;let y=this._sizeLods[r];rs(t,3*y*(r>m-Sr?r-m+Sr:0),4*(this._cubeSize-y),3*y,2*y),o.setRenderTarget(t),o.render(h,xn)}};function Lp(e){let t=[],i=[],r=[],a=e,s=e-Sr+1+yl.length;for(let n=0;n<s;n++){let o=2**a;i.push(o);let l=1/o;n>e-Sr?l=yl[n-e+Sr-1]:n===0&&(l=0),r.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=new Float32Array(108),g=new Float32Array(72),v=new Float32Array(36);for(let m=0;m<6;m++){let y=m%3*2/3-1,_=m>2?0:-1,x=[y,_,0,y+2/3,_,0,y+2/3,_+1,0,y,_,0,y+2/3,_+1,0,y,_+1,0];p.set(x,18*m),g.set(d,12*m);let T=[m,m,m,m,m,m];v.set(T,6*m)}let f=new ke;f.setAttribute("position",new Qe(p,3)),f.setAttribute("uv",new Qe(g,2)),f.setAttribute("faceIndex",new Qe(v,1)),t.push(f),a>Sr&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Sl(e,t,i){let r=new kt(e,t,i);return r.texture.mapping=306,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function rs(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Pp(e,t,i){let r=new Float32Array(br),a=new w(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:En(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bl(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:En(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Tl(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:En(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function En(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ip(e){let t=new WeakMap,i=null;function r(o){if(o&&o.isTexture){let l=o.mapping,h=l===303||l===304,c=l===301||l===302;if(h||c){if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return i===null&&(i=new Tn(e)),u=h?i.fromEquirectangular(o,u):i.fromCubemap(o,u),t.set(o,u),u.texture}if(t.has(o))return t.get(o).texture;{let u=o.image;if(h&&u&&u.height>0||c&&u&&a(u)){i===null&&(i=new Tn(e));let d=h?i.fromEquirectangular(o):i.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}return null}}}return o}function a(o){let l=0;for(let h=0;h<6;h++)o[h]!==void 0&&l++;return l===6}function s(o){let l=o.target;l.removeEventListener("dispose",s);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function n(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:n}}function Up(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(r)}return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){let a=i(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Dp(e,t,i,r){let a={},s=new WeakMap;function n(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let f=0,m=v.length;f<m;f++)t.remove(v[f])}d.removeEventListener("dispose",n),delete a[d.id];let p=s.get(d);p&&(t.remove(p),s.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",n),a[d.id]=!0,i.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let f=0,m=v.length;f<m;f++)t.update(v[f],e.ARRAY_BUFFER)}}function h(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let y=p.array;v=p.version;for(let _=0,x=y.length;_<x;_+=3){let T=y[_+0],E=y[_+1],L=y[_+2];d.push(T,E,E,L,L,T)}}else if(g!==void 0){let y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){let T=_+0,E=_+1,L=_+2;d.push(T,E,E,L,L,T)}}else return;let f=new(Yo(d)?gn:fn)(d,1);f.version=v;let m=s.get(u);m&&t.remove(m),s.set(u,f)}function c(u){let d=s.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&h(u)}else h(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Np(e,t,i,r){let a=r.isWebGL2,s;function n(d){s=d}let o,l;function h(d){o=d.type,l=d.bytesPerElement}function c(d,p){e.drawElements(s,p,o,d*l),i.update(p,s,1)}function u(d,p,g){if(g===0)return;let v,f;if(a)v=e,f="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[f](s,p,o,d*l,g),i.update(p,s,g)}this.setMode=n,this.setIndex=h,this.render=c,this.renderInstances=u}function Op(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,n,o){switch(i.calls++,n){case e.TRIANGLES:i.triangles+=s/3*o;break;case e.LINES:i.lines+=s/2*o;break;case e.LINE_STRIP:i.lines+=o*(s-1);break;case e.LINE_LOOP:i.lines+=o*s;break;case e.POINTS:i.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Fp(e,t){return e[0]-t[0]}function Bp(e,t){return Math.abs(t[1])-Math.abs(e[1])}function zp(e,t,i){let r={},a=new Float32Array(8),s=new WeakMap,n=new $e,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function l(h,c,u){let d=h.morphTargetInfluences;if(t.isWebGL2===!0){let p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p===void 0?0:p.length,v=s.get(c);if(v===void 0||v.count!==g){let P=function(){W.dispose(),s.delete(c),c.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let y=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],L=c.morphAttributes.color||[],D=0;y===!0&&(D=1),_===!0&&(D=2),x===!0&&(D=3);let M=c.attributes.position.count*D,R=1;M>t.maxTextureSize&&(R=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let O=new Float32Array(M*R*4*g),W=new Ia(O,M,R,g);W.type=Sa,W.needsUpdate=!0;let J=D*4;for(let H=0;H<g;H++){let X=T[H],q=E[H],ae=L[H],j=M*R*4*H;for(let U=0;U<X.count;U++){let F=U*J;y===!0&&(n.fromBufferAttribute(X,U),O[j+F+0]=n.x,O[j+F+1]=n.y,O[j+F+2]=n.z,O[j+F+3]=0),_===!0&&(n.fromBufferAttribute(q,U),O[j+F+4]=n.x,O[j+F+5]=n.y,O[j+F+6]=n.z,O[j+F+7]=0),x===!0&&(n.fromBufferAttribute(ae,U),O[j+F+8]=n.x,O[j+F+9]=n.y,O[j+F+10]=n.z,O[j+F+11]=ae.itemSize===4?n.w:1)}}v={count:g,texture:W,size:new Z(M,R)},s.set(c,v),c.addEventListener("dispose",P)}let f=0;for(let y=0;y<d.length;y++)f+=d[y];let m=c.morphTargetsRelative?1:1-f;u.getUniforms().setValue(e,"morphTargetBaseInfluence",m),u.getUniforms().setValue(e,"morphTargetInfluences",d),u.getUniforms().setValue(e,"morphTargetsTexture",v.texture,i),u.getUniforms().setValue(e,"morphTargetsTextureSize",v.size)}else{let p=d===void 0?0:d.length,g=r[c.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];r[c.id]=g}for(let _=0;_<p;_++){let x=g[_];x[0]=_,x[1]=d[_]}g.sort(Bp);for(let _=0;_<8;_++)_<p&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=2**53-1,o[_][1]=0);o.sort(Fp);let v=c.morphAttributes.position,f=c.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let x=o[_],T=x[0],E=x[1];T!==2**53-1&&E?(v&&c.getAttribute("morphTarget"+_)!==v[T]&&c.setAttribute("morphTarget"+_,v[T]),f&&c.getAttribute("morphNormal"+_)!==f[T]&&c.setAttribute("morphNormal"+_,f[T]),a[_]=E,m+=E):(v&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),f&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),a[_]=0)}let y=c.morphTargetsRelative?1:1-m;u.getUniforms().setValue(e,"morphTargetBaseInfluence",y),u.getUniforms().setValue(e,"morphTargetInfluences",a)}}return{update:l}}function Hp(e,t,i,r){let a=new WeakMap;function s(l){let h=r.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function n(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:n}}var El=new ft,wl=new Ia,Al=new rn,Rl=new $r,Cl=[],Ll=[],Pl=new Float32Array(16),Il=new Float32Array(9),Ul=new Float32Array(4);function Er(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,s=Cl[a];if(s===void 0&&(s=new Float32Array(a),Cl[a]=s),t!==0){r.toArray(s,0);for(let n=1,o=0;n!==t;++n)o+=i,e[n].toArray(s,o)}return s}function ut(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function dt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function as(e,t){let i=Ll[t];i===void 0&&(i=new Int32Array(t),Ll[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function kp(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Gp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ut(i,t))return;e.uniform2fv(this.addr,t),dt(i,t)}}function Vp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ut(i,t))return;e.uniform3fv(this.addr,t),dt(i,t)}}function Wp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ut(i,t))return;e.uniform4fv(this.addr,t),dt(i,t)}}function Xp(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ut(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),dt(i,t)}else{if(ut(i,r))return;Ul.set(r),e.uniformMatrix2fv(this.addr,!1,Ul),dt(i,r)}}function jp(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ut(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),dt(i,t)}else{if(ut(i,r))return;Il.set(r),e.uniformMatrix3fv(this.addr,!1,Il),dt(i,r)}}function qp(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ut(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),dt(i,t)}else{if(ut(i,r))return;Pl.set(r),e.uniformMatrix4fv(this.addr,!1,Pl),dt(i,r)}}function Yp(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Zp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ut(i,t))return;e.uniform2iv(this.addr,t),dt(i,t)}}function Jp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ut(i,t))return;e.uniform3iv(this.addr,t),dt(i,t)}}function Kp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ut(i,t))return;e.uniform4iv(this.addr,t),dt(i,t)}}function $p(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Qp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ut(i,t))return;e.uniform2uiv(this.addr,t),dt(i,t)}}function em(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ut(i,t))return;e.uniform3uiv(this.addr,t),dt(i,t)}}function tm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ut(i,t))return;e.uniform4uiv(this.addr,t),dt(i,t)}}function im(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2D(t||El,a)}function rm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Al,a)}function am(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Rl,a)}function sm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||wl,a)}function nm(e){switch(e){case 5126:return kp;case 35664:return Gp;case 35665:return Vp;case 35666:return Wp;case 35674:return Xp;case 35675:return jp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return Zp;case 35668:case 35672:return Jp;case 35669:case 35673:return Kp;case 5125:return $p;case 36294:return Qp;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return sm}}function om(e,t){e.uniform1fv(this.addr,t)}function lm(e,t){let i=Er(t,this.size,2);e.uniform2fv(this.addr,i)}function hm(e,t){let i=Er(t,this.size,3);e.uniform3fv(this.addr,i)}function cm(e,t){let i=Er(t,this.size,4);e.uniform4fv(this.addr,i)}function um(e,t){let i=Er(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function dm(e,t){let i=Er(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function pm(e,t){let i=Er(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function mm(e,t){e.uniform1iv(this.addr,t)}function fm(e,t){e.uniform2iv(this.addr,t)}function gm(e,t){e.uniform3iv(this.addr,t)}function vm(e,t){e.uniform4iv(this.addr,t)}function _m(e,t){e.uniform1uiv(this.addr,t)}function ym(e,t){e.uniform2uiv(this.addr,t)}function xm(e,t){e.uniform3uiv(this.addr,t)}function Mm(e,t){e.uniform4uiv(this.addr,t)}function Sm(e,t,i){let r=this.cache,a=t.length,s=as(i,a);ut(r,s)||(e.uniform1iv(this.addr,s),dt(r,s));for(let n=0;n!==a;++n)i.setTexture2D(t[n]||El,s[n])}function bm(e,t,i){let r=this.cache,a=t.length,s=as(i,a);ut(r,s)||(e.uniform1iv(this.addr,s),dt(r,s));for(let n=0;n!==a;++n)i.setTexture3D(t[n]||Al,s[n])}function Tm(e,t,i){let r=this.cache,a=t.length,s=as(i,a);ut(r,s)||(e.uniform1iv(this.addr,s),dt(r,s));for(let n=0;n!==a;++n)i.setTextureCube(t[n]||Rl,s[n])}function Em(e,t,i){let r=this.cache,a=t.length,s=as(i,a);ut(r,s)||(e.uniform1iv(this.addr,s),dt(r,s));for(let n=0;n!==a;++n)i.setTexture2DArray(t[n]||wl,s[n])}function wm(e){switch(e){case 5126:return om;case 35664:return lm;case 35665:return hm;case 35666:return cm;case 35674:return um;case 35675:return dm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return fm;case 35668:case 35672:return gm;case 35669:case 35673:return vm;case 5125:return _m;case 36294:return ym;case 36295:return xm;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Em}}var Am=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=nm(t.type)}},Rm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=wm(t.type)}},Cm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let n=r[a];n.setValue(e,t[n.id],i)}}},wn=/(\w+)(\])?(\[|\.)?/g;function Dl(e,t){e.seq.push(t),e.map[t.id]=t}function Lm(e,t,i){let r=e.name,a=r.length;for(wn.lastIndex=0;;){let s=wn.exec(r),n=wn.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o|=0),h===void 0||h==="["&&n+2===a){Dl(i,h===void 0?new Am(o,e,t):new Rm(o,e,t));break}{let c=i.map[o];c===void 0&&(c=new Cm(o),Dl(i,c)),i=c}}}var ss=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r);Lm(a,e.getUniformLocation(t,a.name),this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){let n=t[a],o=i[n.id];o.needsUpdate!==!1&&n.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function Nl(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Pm=37297,Im=0;function Um(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let n=a;n<s;n++){let o=n+1;r.push(`${o===t?">":" "} ${o}: ${i[n]}`)}return r.join(`
`)}function Dm(e){let t=Je.getPrimaries(Je.workingColorSpace),i=Je.getPrimaries(e),r;switch(t===i?r="":t==="p3"&&i==="rec709"?r="LinearDisplayP3ToLinearSRGB":t==="rec709"&&i==="p3"&&(r="LinearSRGBToLinearDisplayP3"),e){case ri:case Aa:return[r,"LinearTransferOETF"];case yt:case Ys:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[r,"LinearTransferOETF"]}}function Ol(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(r&&a==="")return"";let s=/ERROR: 0:(\d+)/.exec(a);if(s){let n=parseInt(s[1]);return i.toUpperCase()+`

`+a+`

`+Um(e.getShaderSource(t),n)}return a}function Nm(e,t){let i=Dm(t);return`vec4 ${e}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function Om(e,t){let i;switch(t){case 1:i="Linear";break;case 2:i="Reinhard";break;case 3:i="OptimizedCineon";break;case 4:i="ACESFilmic";break;case 5:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Fm(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ta).join(`
`)}function Bm(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function zm(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let s=e.getActiveAttrib(t,a),n=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),i[n]={type:s.type,location:e.getAttribLocation(t,n),locationSize:o}}return i}function ta(e){return e!==""}function Fl(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function An(e){return e.replace(Hm,Gm)}var km=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Gm(e,t){let i=Ie[t];if(i===void 0){let r=km.get(t);if(r!==void 0)i=Ie[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw Error("Can not resolve #include <"+t+">")}return An(i)}var Vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(e){return e.replace(Vm,Wm)}function Wm(e,t,i,r){let a="";for(let s=parseInt(t);s<parseInt(i);s++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Hl(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xm(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function jm(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV"}return t}function qm(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===302&&(t="ENVMAP_MODE_REFRACTION"),t}function Ym(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD"}return t}function Zm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**i,112)),texelHeight:r,maxMip:i}}function Jm(e,t,i,r){let a=e.getContext(),s=i.defines,n=i.vertexShader,o=i.fragmentShader,l=Xm(i),h=jm(i),c=qm(i),u=Ym(i),d=Zm(i),p=i.isWebGL2?"":Fm(i),g=Bm(s),v=a.createProgram(),f,m,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(ta).join(`
`),f.length>0&&(f+=`
`),m=[p,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(ta).join(`
`),m.length>0&&(m+=`
`)):(f=[Hl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),m=[p,Hl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping===0?"":"#define TONE_MAPPING",i.toneMapping===0?"":Ie.tonemapping_pars_fragment,i.toneMapping===0?"":Om("toneMapping",i.toneMapping),i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Nm("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ta).join(`
`)),n=An(n),n=Fl(n,i),n=Bl(n,i),o=An(o),o=Fl(o,i),o=Bl(o,i),n=zl(n),o=zl(o),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=`precision mediump sampler2DArray;
#define attribute in
#define varying out
#define texture2D texture
`+f,m=["precision mediump sampler2DArray;","#define varying in",i.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=y+f+n,x=y+m+o,T=Nl(a,a.VERTEX_SHADER,_),E=Nl(a,a.FRAGMENT_SHADER,x);a.attachShader(v,T),a.attachShader(v,E),i.index0AttributeName===void 0?i.morphTargets===!0&&a.bindAttribLocation(v,0,"position"):a.bindAttribLocation(v,0,i.index0AttributeName),a.linkProgram(v);function L(O){if(e.debug.checkShaderErrors){let W=a.getProgramInfoLog(v).trim(),J=a.getShaderInfoLog(T).trim(),P=a.getShaderInfoLog(E).trim(),H=!0,X=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,v,T,E);else{let q=Ol(a,T,"vertex"),ae=Ol(a,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+q+`
`+ae)}else W===""?(J===""||P==="")&&(X=!1):console.warn("THREE.WebGLProgram: Program Info Log:",W);X&&(O.diagnostics={runnable:H,programLog:W,vertexShader:{log:J,prefix:f},fragmentShader:{log:P,prefix:m}})}a.deleteShader(T),a.deleteShader(E),D=new ss(a,v),M=zm(a,v)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(v,Pm)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Im++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}var Km=0,$m=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Qm(e),t.set(e,i)),i}},Qm=class{constructor(e){this.id=Km++,this.code=e,this.usedTimes=0}};function ef(e,t,i,r,a,s,n){let o=new Ha,l=new $m,h=[],c=a.isWebGL2,u=a.logarithmicDepthBuffer,d=a.vertexTextures,p=a.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function f(M,R,O,W,J){let P=W.fog,H=J.geometry,X=M.isMeshStandardMaterial?W.environment:null,q=(M.isMeshStandardMaterial?i:t).get(M.envMap||X),ae=q&&q.mapping===306?q.image.height:null,j=g[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let U=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,F=U===void 0?0:U.length,Q=0;H.morphAttributes.position!==void 0&&(Q=1),H.morphAttributes.normal!==void 0&&(Q=2),H.morphAttributes.color!==void 0&&(Q=3);let ue,me,Te,Oe;if(j){let it=Yt[j];ue=it.vertexShader,me=it.fragmentShader}else ue=M.vertexShader,me=M.fragmentShader,l.update(M),Te=l.getVertexShaderID(M),Oe=l.getFragmentShaderID(M);let we=e.getRenderTarget(),je=J.isInstancedMesh===!0,Ue=!!M.map,qe=!!M.matcap,C=!!q,oe=!!M.aoMap,$=!!M.lightMap,K=!!M.bumpMap,Y=!!M.normalMap,Me=!!M.displacementMap,fe=!!M.emissiveMap,ye=!!M.metalnessMap,Ge=!!M.roughnessMap,Le=M.anisotropy>0,nt=M.clearcoat>0,Lt=M.iridescence>0,A=M.sheen>0,S=M.transmission>0,B=Le&&!!M.anisotropyMap,re=nt&&!!M.clearcoatMap,te=nt&&!!M.clearcoatNormalMap,ee=nt&&!!M.clearcoatRoughnessMap,ve=Lt&&!!M.iridescenceMap,ne=Lt&&!!M.iridescenceThicknessMap,_e=A&&!!M.sheenColorMap,Re=A&&!!M.sheenRoughnessMap,Ye=!!M.specularMap,ie=!!M.specularColorMap,tt=!!M.specularIntensityMap,Fe=S&&!!M.transmissionMap,Pe=S&&!!M.thicknessMap,xe=!!M.gradientMap,Se=!!M.alphaMap,Xe=M.alphaTest>0,I=!!M.alphaHash,de=!!M.extensions,se=!!H.attributes.uv1,V=!!H.attributes.uv2,le=!!H.attributes.uv3,be=0;return M.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(be=e.toneMapping),{isWebGL2:c,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:ue,fragmentShader:me,defines:M.defines,customVertexShaderID:Te,customFragmentShaderID:Oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:je,instancingColor:je&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:we===null?e.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:ri,map:Ue,matcap:qe,envMap:C,envMapMode:C&&q.mapping,envMapCubeUVHeight:ae,aoMap:oe,lightMap:$,bumpMap:K,normalMap:Y,displacementMap:d&&Me,emissiveMap:fe,normalMapObjectSpace:Y&&M.normalMapType===1,normalMapTangentSpace:Y&&M.normalMapType===0,metalnessMap:ye,roughnessMap:Ge,anisotropy:Le,anisotropyMap:B,clearcoat:nt,clearcoatMap:re,clearcoatNormalMap:te,clearcoatRoughnessMap:ee,iridescence:Lt,iridescenceMap:ve,iridescenceThicknessMap:ne,sheen:A,sheenColorMap:_e,sheenRoughnessMap:Re,specularMap:Ye,specularColorMap:ie,specularIntensityMap:tt,transmission:S,transmissionMap:Fe,thicknessMap:Pe,gradientMap:xe,opaque:M.transparent===!1&&M.blending===1,alphaMap:Se,alphaTest:Xe,alphaHash:I,combine:M.combine,mapUv:Ue&&v(M.map.channel),aoMapUv:oe&&v(M.aoMap.channel),lightMapUv:$&&v(M.lightMap.channel),bumpMapUv:K&&v(M.bumpMap.channel),normalMapUv:Y&&v(M.normalMap.channel),displacementMapUv:Me&&v(M.displacementMap.channel),emissiveMapUv:fe&&v(M.emissiveMap.channel),metalnessMapUv:ye&&v(M.metalnessMap.channel),roughnessMapUv:Ge&&v(M.roughnessMap.channel),anisotropyMapUv:B&&v(M.anisotropyMap.channel),clearcoatMapUv:re&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(M.sheenRoughnessMap.channel),specularMapUv:Ye&&v(M.specularMap.channel),specularColorMapUv:ie&&v(M.specularColorMap.channel),specularIntensityMapUv:tt&&v(M.specularIntensityMap.channel),transmissionMapUv:Fe&&v(M.transmissionMap.channel),thicknessMapUv:Pe&&v(M.thicknessMap.channel),alphaMapUv:Se&&v(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Y||Le),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:V,vertexUv3s:le,pointsUvs:J.isPoints===!0&&!!H.attributes.uv&&(Ue||Se),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:Q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&O.length>0,shadowMapType:e.shadowMap.type,toneMapping:be,useLegacyLights:e._useLegacyLights,decodeVideoTexture:Ue&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)==="srgb",premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:de&&M.extensions.derivatives===!0,extensionFragDepth:de&&M.extensions.fragDepth===!0,extensionDrawBuffers:de&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(let O in M.defines)R.push(O),R.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(y(R,M),_(R,M),R.push(e.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function y(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function _(M,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),M.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function x(M){let R=g[M.type],O;if(R){let W=Yt[R];O=fl.clone(W.uniforms)}else O=M.uniforms;return O}function T(M,R){let O;for(let W=0,J=h.length;W<J;W++){let P=h[W];if(P.cacheKey===R){O=P,++O.usedTimes;break}}return O===void 0&&(O=new Jm(e,R,M,s),h.push(O)),O}function E(M){if(--M.usedTimes===0){let R=h.indexOf(M);h[R]=h[h.length-1],h.pop(),M.destroy()}}function L(M){l.remove(M)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:L,programs:h,dispose:D}}function tf(){let e=new WeakMap;function t(s){let n=e.get(s);return n===void 0&&(n={},e.set(s,n)),n}function i(s){e.delete(s)}function r(s,n,o){e.get(s)[n]=o}function a(){e=new WeakMap}return{get:t,remove:i,update:r,dispose:a}}function rf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function kl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Gl(){let e=[],t=0,i=[],r=[],a=[];function s(){t=0,i.length=0,r.length=0,a.length=0}function n(u,d,p,g,v,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=f),t++,m}function o(u,d,p,g,v,f){let m=n(u,d,p,g,v,f);p.transmission>0?r.push(m):p.transparent===!0?a.push(m):i.push(m)}function l(u,d,p,g,v,f){let m=n(u,d,p,g,v,f);p.transmission>0?r.unshift(m):p.transparent===!0?a.unshift(m):i.unshift(m)}function h(u,d){i.length>1&&i.sort(u||rf),r.length>1&&r.sort(d||kl),a.length>1&&a.sort(d||kl)}function c(){for(let u=t,d=e.length;u<d;u++){let p=e[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:i,transmissive:r,transparent:a,init:s,push:o,unshift:l,finish:c,sort:h}}function af(){let e=new WeakMap;function t(r,a){let s=e.get(r),n;return s===void 0?(n=new Gl,e.set(r,[n])):a>=s.length?(n=new Gl,s.push(n)):n=s[a],n}function i(){e=new WeakMap}return{get:t,dispose:i}}function sf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new w,color:new pe};break;case"SpotLight":i={position:new w,direction:new w,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new w,color:new pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new w,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":i={color:new pe,position:new w,halfWidth:new w,halfHeight:new w}}return e[t.id]=i,i}}}function nf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=i,i}}}var of=0;function lf(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function hf(e,t){let i=new sf,r=nf(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)a.probe.push(new w);let s=new w,n=new Ne,o=new Ne;function l(c,u){let d=0,p=0,g=0;for(let W=0;W<9;W++)a.probe[W].set(0,0,0);let v=0,f=0,m=0,y=0,_=0,x=0,T=0,E=0,L=0,D=0,M=0;c.sort(lf);let R=u===!0?Math.PI:1;for(let W=0,J=c.length;W<J;W++){let P=c[W],H=P.color,X=P.intensity,q=P.distance,ae=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=H.r*X*R,p+=H.g*X*R,g+=H.b*X*R;else if(P.isLightProbe){for(let j=0;j<9;j++)a.probe[j].addScaledVector(P.sh.coefficients[j],X);M++}else if(P.isDirectionalLight){let j=i.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*R),P.castShadow){let U=P.shadow,F=r.get(P);F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,a.directionalShadow[v]=F,a.directionalShadowMap[v]=ae,a.directionalShadowMatrix[v]=P.shadow.matrix,x++}a.directional[v]=j,v++}else if(P.isSpotLight){let j=i.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(H).multiplyScalar(X*R),j.distance=q,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,a.spot[m]=j;let U=P.shadow;if(P.map&&(a.spotLightMap[L]=P.map,L++,U.updateMatrices(P),P.castShadow&&D++),a.spotLightMatrix[m]=U.matrix,P.castShadow){let F=r.get(P);F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,a.spotShadow[m]=F,a.spotShadowMap[m]=ae,E++}m++}else if(P.isRectAreaLight){let j=i.get(P);j.color.copy(H).multiplyScalar(X),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),a.rectArea[y]=j,y++}else if(P.isPointLight){let j=i.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*R),j.distance=P.distance,j.decay=P.decay,P.castShadow){let U=P.shadow,F=r.get(P);F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,F.shadowCameraNear=U.camera.near,F.shadowCameraFar=U.camera.far,a.pointShadow[f]=F,a.pointShadowMap[f]=ae,a.pointShadowMatrix[f]=P.shadow.matrix,T++}a.point[f]=j,f++}else if(P.isHemisphereLight){let j=i.get(P);j.skyColor.copy(P.color).multiplyScalar(X*R),j.groundColor.copy(P.groundColor).multiplyScalar(X*R),a.hemi[_]=j,_++}}y>0&&(t.isWebGL2||e.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ce.LTC_FLOAT_1,a.rectAreaLTC2=ce.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ce.LTC_HALF_1,a.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=d,a.ambient[1]=p,a.ambient[2]=g;let O=a.hash;(O.directionalLength!==v||O.pointLength!==f||O.spotLength!==m||O.rectAreaLength!==y||O.hemiLength!==_||O.numDirectionalShadows!==x||O.numPointShadows!==T||O.numSpotShadows!==E||O.numSpotMaps!==L||O.numLightProbes!==M)&&(a.directional.length=v,a.spot.length=m,a.rectArea.length=y,a.point.length=f,a.hemi.length=_,a.directionalShadow.length=x,a.directionalShadowMap.length=x,a.pointShadow.length=T,a.pointShadowMap.length=T,a.spotShadow.length=E,a.spotShadowMap.length=E,a.directionalShadowMatrix.length=x,a.pointShadowMatrix.length=T,a.spotLightMatrix.length=E+L-D,a.spotLightMap.length=L,a.numSpotLightShadowsWithMaps=D,a.numLightProbes=M,O.directionalLength=v,O.pointLength=f,O.spotLength=m,O.rectAreaLength=y,O.hemiLength=_,O.numDirectionalShadows=x,O.numPointShadows=T,O.numSpotShadows=E,O.numSpotMaps=L,O.numLightProbes=M,a.version=of++)}function h(c,u){let d=0,p=0,g=0,v=0,f=0,m=u.matrixWorldInverse;for(let y=0,_=c.length;y<_;y++){let x=c[y];if(x.isDirectionalLight){let T=a.directional[d];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(x.isSpotLight){let T=a.spot[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(x.isRectAreaLight){let T=a.rectArea[v];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),o.identity(),n.copy(x.matrixWorld),n.premultiply(m),o.extractRotation(n),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let T=a.point[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){let T=a.hemi[f];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(m),f++}}}return{setup:l,setupView:h,state:a}}function Vl(e,t){let i=new hf(e,t),r=[],a=[];function s(){r.length=0,a.length=0}function n(c){r.push(c)}function o(c){a.push(c)}function l(c){i.setup(r,c)}function h(c){i.setupView(r,c)}return{init:s,state:{lightsArray:r,shadowsArray:a,lights:i},setupLights:l,setupLightsView:h,pushLight:n,pushShadow:o}}function cf(e,t){let i=new WeakMap;function r(s,n=0){let o=i.get(s),l;return o===void 0?(l=new Vl(e,t),i.set(s,[l])):n>=o.length?(l=new Vl(e,t),o.push(l)):l=o[n],l}function a(){i=new WeakMap}return{get:r,dispose:a}}var Rn=class extends xt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Go,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cn=class extends xt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},uf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,df=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pf(e,t,i){let r=new Qr,a=new Z,s=new Z,n=new $e,o=new Rn({depthPacking:Vo}),l=new Cn,h={},c=i.maxTextureSize,u={0:1,1:0,2:2},d=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:uf,fragmentShader:df}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ke;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new vt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;this.render=function(T,E,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;let D=e.getRenderTarget(),M=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),O=e.state;O.setBlending(0),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let W=m!==3&&this.type===3,J=m===3&&this.type!==3;for(let P=0,H=T.length;P<H;P++){let X=T[P],q=X.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);let ae=q.getFrameExtents();if(a.multiply(ae),s.copy(q.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(s.x=Math.floor(c/ae.x),a.x=s.x*ae.x,q.mapSize.x=s.x),a.y>c&&(s.y=Math.floor(c/ae.y),a.y=s.y*ae.y,q.mapSize.y=s.y)),q.map===null||W===!0||J===!0){let U=this.type===3?{}:{minFilter:Et,magFilter:Et};q.map!==null&&q.map.dispose(),q.map=new kt(a.x,a.y,U),q.map.texture.name=X.name+".shadowMap",q.camera.updateProjectionMatrix()}e.setRenderTarget(q.map),e.clear();let j=q.getViewportCount();for(let U=0;U<j;U++){let F=q.getViewport(U);n.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),O.viewport(n),q.updateMatrices(X,U),r=q.getFrustum(),x(E,L,q.camera,X,this.type)}q.isPointLightShadow!==!0&&this.type===3&&y(q,L),q.needsUpdate=!1}m=this.type,f.needsUpdate=!1,e.setRenderTarget(D,M,R)};function y(T,E){let L=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new kt(a.x,a.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(E,null,L,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(E,null,L,p,v,null)}function _(T,E,L,D){let M=null,R=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)M=R;else if(M=L.isPointLight===!0?l:o,e.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=M.uuid,W=E.uuid,J=h[O];J===void 0&&(J={},h[O]=J);let P=J[W];P===void 0&&(P=M.clone(),J[W]=P),M=P}if(M.visible=E.visible,M.wireframe=E.wireframe,D===3?M.side=E.shadowSide===null?E.side:E.shadowSide:M.side=E.shadowSide===null?u[E.side]:E.shadowSide,M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=e.properties.get(M);O.light=L}return M}function x(T,E,L,D,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===3)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let O=t.update(T),W=T.material;if(Array.isArray(W)){let J=O.groups;for(let P=0,H=J.length;P<H;P++){let X=J[P],q=W[X.materialIndex];if(q&&q.visible){let ae=_(T,q,D,M);e.renderBufferDirect(L,null,O,ae,T,X)}}}else if(W.visible){let J=_(T,W,D,M);e.renderBufferDirect(L,null,O,J,T,null)}}let R=T.children;for(let O=0,W=R.length;O<W;O++)x(R[O],E,L,D,M)}}function mf(e,t,i){let r=i.isWebGL2;function a(){let I=!1,de=new $e,se=null,V=new $e(0,0,0,0);return{setMask:function(le){se!==le&&!I&&(e.colorMask(le,le,le,le),se=le)},setLocked:function(le){I=le},setClear:function(le,be,it,pt,Bt){Bt===!0&&(le*=pt,be*=pt,it*=pt),de.set(le,be,it,pt),V.equals(de)===!1&&(e.clearColor(le,be,it,pt),V.copy(de))},reset:function(){I=!1,se=null,V.set(-1,0,0,0)}}}function s(){let I=!1,de=null,se=null,V=null;return{setTest:function(le){le?Ue(e.DEPTH_TEST):qe(e.DEPTH_TEST)},setMask:function(le){de!==le&&!I&&(e.depthMask(le),de=le)},setFunc:function(le){if(se!==le){switch(le){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}se=le}},setLocked:function(le){I=le},setClear:function(le){V!==le&&(e.clearDepth(le),V=le)},reset:function(){I=!1,de=null,se=null,V=null}}}function n(){let I=!1,de=null,se=null,V=null,le=null,be=null,it=null,pt=null,Bt=null;return{setTest:function(Ze){I||(Ze?Ue(e.STENCIL_TEST):qe(e.STENCIL_TEST))},setMask:function(Ze){de!==Ze&&!I&&(e.stencilMask(Ze),de=Ze)},setFunc:function(Ze,Kt,$t){(se!==Ze||V!==Kt||le!==$t)&&(e.stencilFunc(Ze,Kt,$t),se=Ze,V=Kt,le=$t)},setOp:function(Ze,Kt,$t){(be!==Ze||it!==Kt||pt!==$t)&&(e.stencilOp(Ze,Kt,$t),be=Ze,it=Kt,pt=$t)},setLocked:function(Ze){I=Ze},setClear:function(Ze){Bt!==Ze&&(e.clearStencil(Ze),Bt=Ze)},reset:function(){I=!1,de=null,se=null,V=null,le=null,be=null,it=null,pt=null,Bt=null}}}let o=new a,l=new s,h=new n,c=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,v=[],f=null,m=!1,y=null,_=null,x=null,T=null,E=null,L=null,D=null,M=new pe(0,0,0),R=0,O=!1,W=null,J=null,P=null,H=null,X=null,q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ae=!1,j=0,U=e.getParameter(e.VERSION);U.indexOf("WebGL")===-1?U.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),ae=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(U)[1]),ae=j>=1);let F=null,Q={},ue=e.getParameter(e.SCISSOR_BOX),me=e.getParameter(e.VIEWPORT),Te=new $e().fromArray(ue),Oe=new $e().fromArray(me);function we(I,de,se,V){let le=new Uint8Array(4),be=e.createTexture();e.bindTexture(I,be),e.texParameteri(I,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(I,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let it=0;it<se;it++)r&&(I===e.TEXTURE_3D||I===e.TEXTURE_2D_ARRAY)?e.texImage3D(de,0,e.RGBA,1,1,V,0,e.RGBA,e.UNSIGNED_BYTE,le):e.texImage2D(de+it,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,le);return be}let je={};je[e.TEXTURE_2D]=we(e.TEXTURE_2D,e.TEXTURE_2D,1),je[e.TEXTURE_CUBE_MAP]=we(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(je[e.TEXTURE_2D_ARRAY]=we(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),je[e.TEXTURE_3D]=we(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Ue(e.DEPTH_TEST),l.setFunc(3),ye(!1),Ge(1),Ue(e.CULL_FACE),Me(0);function Ue(I){d[I]!==!0&&(e.enable(I),d[I]=!0)}function qe(I){d[I]!==!1&&(e.disable(I),d[I]=!1)}function C(I,de){return p[I]!==de&&(e.bindFramebuffer(I,de),p[I]=de,r&&(I===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=de),I===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=de)),!0)}function oe(I,de){let se=v,V=!1;if(I)if(se=g.get(de),se===void 0&&(se=[],g.set(de,se)),I.isWebGLMultipleRenderTargets){let le=I.texture;if(se.length!==le.length||se[0]!==e.COLOR_ATTACHMENT0){for(let be=0,it=le.length;be<it;be++)se[be]=e.COLOR_ATTACHMENT0+be;se.length=le.length,V=!0}}else se[0]!==e.COLOR_ATTACHMENT0&&(se[0]=e.COLOR_ATTACHMENT0,V=!0);else se[0]!==e.BACK&&(se[0]=e.BACK,V=!0);V&&(i.isWebGL2?e.drawBuffers(se):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function $(I){return f!==I&&(e.useProgram(I),f=I,!0)}let K={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};if(r)K[103]=e.MIN,K[104]=e.MAX;else{let I=t.get("EXT_blend_minmax");I!==null&&(K[103]=I.MIN_EXT,K[104]=I.MAX_EXT)}let Y={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function Me(I,de,se,V,le,be,it,pt,Bt,Ze){if(I===0)m===!0&&(qe(e.BLEND),m=!1);else if(m===!1&&(Ue(e.BLEND),m=!0),I!==5){if(I!==y||Ze!==O){if((_!==100||E!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,E=100),Ze)switch(I){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I)}else switch(I){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I)}x=null,T=null,L=null,D=null,M.set(0,0,0),R=0,y=I,O=Ze}}else le||=de,be||=se,it||=V,(de!==_||le!==E)&&(e.blendEquationSeparate(K[de],K[le]),_=de,E=le),(se!==x||V!==T||be!==L||it!==D)&&(e.blendFuncSeparate(Y[se],Y[V],Y[be],Y[it]),x=se,T=V,L=be,D=it),(pt.equals(M)===!1||Bt!==R)&&(e.blendColor(pt.r,pt.g,pt.b,Bt),M.copy(pt),R=Bt),y=I,O=!1}function fe(I,de){I.side===2?qe(e.CULL_FACE):Ue(e.CULL_FACE);let se=I.side===1;de&&(se=!se),ye(se),I.blending===1&&I.transparent===!1?Me(0):Me(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);let V=I.stencilWrite;h.setTest(V),V&&(h.setMask(I.stencilWriteMask),h.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),h.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ue(e.SAMPLE_ALPHA_TO_COVERAGE):qe(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(I){W!==I&&(I?e.frontFace(e.CW):e.frontFace(e.CCW),W=I)}function Ge(I){I===0?qe(e.CULL_FACE):(Ue(e.CULL_FACE),I!==J&&(I===1?e.cullFace(e.BACK):I===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),J=I}function Le(I){I!==P&&(ae&&e.lineWidth(I),P=I)}function nt(I,de,se){I?(Ue(e.POLYGON_OFFSET_FILL),(H!==de||X!==se)&&(e.polygonOffset(de,se),H=de,X=se)):qe(e.POLYGON_OFFSET_FILL)}function Lt(I){I?Ue(e.SCISSOR_TEST):qe(e.SCISSOR_TEST)}function A(I){I===void 0&&(I=e.TEXTURE0+q-1),F!==I&&(e.activeTexture(I),F=I)}function S(I,de,se){se===void 0&&(se=F===null?e.TEXTURE0+q-1:F);let V=Q[se];V===void 0&&(V={type:void 0,texture:void 0},Q[se]=V),(V.type!==I||V.texture!==de)&&(F!==se&&(e.activeTexture(se),F=se),e.bindTexture(I,de||je[I]),V.type=I,V.texture=de)}function B(){let I=Q[F];I!==void 0&&I.type!==void 0&&(e.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function re(){try{e.compressedTexImage2D.apply(e,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{e.compressedTexImage3D.apply(e,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{e.texSubImage2D.apply(e,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{e.texSubImage3D.apply(e,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{e.texStorage2D.apply(e,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{e.texStorage3D.apply(e,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{e.texImage2D.apply(e,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{e.texImage3D.apply(e,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(I){Te.equals(I)===!1&&(e.scissor(I.x,I.y,I.z,I.w),Te.copy(I))}function Pe(I){Oe.equals(I)===!1&&(e.viewport(I.x,I.y,I.z,I.w),Oe.copy(I))}function xe(I,de){let se=u.get(de);se===void 0&&(se=new WeakMap,u.set(de,se));let V=se.get(I);V===void 0&&(V=e.getUniformBlockIndex(de,I.name),se.set(I,V))}function Se(I,de){let se=u.get(de).get(I);c.get(de)!==se&&(e.uniformBlockBinding(de,se,I.__bindingPointIndex),c.set(de,se))}function Xe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},F=null,Q={},p={},g=new WeakMap,v=[],f=null,m=!1,y=null,_=null,x=null,T=null,E=null,L=null,D=null,M=new pe(0,0,0),R=0,O=!1,W=null,J=null,P=null,H=null,X=null,Te.set(0,0,e.canvas.width,e.canvas.height),Oe.set(0,0,e.canvas.width,e.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:Ue,disable:qe,bindFramebuffer:C,drawBuffers:oe,useProgram:$,setBlending:Me,setMaterial:fe,setFlipSided:ye,setCullFace:Ge,setLineWidth:Le,setPolygonOffset:nt,setScissorTest:Lt,activeTexture:A,bindTexture:S,unbindTexture:B,compressedTexImage2D:re,compressedTexImage3D:te,texImage2D:ie,texImage3D:tt,updateUBOMapping:xe,uniformBlockBinding:Se,texStorage2D:Re,texStorage3D:Ye,texSubImage2D:ee,texSubImage3D:ve,compressedTexSubImage2D:ne,compressedTexSubImage3D:_e,scissor:Fe,viewport:Pe,reset:Xe}}function ff(e,t,i,r,a,s,n){let o=a.isWebGL2,l=a.maxTextures,h=a.maxCubemapSize,c=a.maxTextureSize,u=a.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,v,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return m?new OffscreenCanvas(A,S):Xr("canvas")}function _(A,S,B,re){let te=1;if((A.width>re||A.height>re)&&(te=re/Math.max(A.width,A.height)),te<1||S===!0){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let ee=S?La:Math.floor,ve=ee(te*A.width),ne=ee(te*A.height);v===void 0&&(v=y(ve,ne));let _e=B?y(ve,ne):v;return _e.width=ve,_e.height=ne,_e.getContext("2d").drawImage(A,0,0,ve,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ve+"x"+ne+")."),_e}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A}return A}function x(A){return Ks(A.width)&&Ks(A.height)}function T(A){return o?!1:A.wrapS!==1001||A.wrapT!==1001||A.minFilter!==1003&&A.minFilter!==1006}function E(A,S){return A.generateMipmaps&&S&&A.minFilter!==1003&&A.minFilter!==1006}function L(A){e.generateMipmap(A)}function D(A,S,B,re,te=!1){if(o===!1)return S;if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=S;if(S===e.RED&&(B===e.FLOAT&&(ee=e.R32F),B===e.HALF_FLOAT&&(ee=e.R16F),B===e.UNSIGNED_BYTE&&(ee=e.R8)),S===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(ee=e.R8UI),B===e.UNSIGNED_SHORT&&(ee=e.R16UI),B===e.UNSIGNED_INT&&(ee=e.R32UI),B===e.BYTE&&(ee=e.R8I),B===e.SHORT&&(ee=e.R16I),B===e.INT&&(ee=e.R32I)),S===e.RG&&(B===e.FLOAT&&(ee=e.RG32F),B===e.HALF_FLOAT&&(ee=e.RG16F),B===e.UNSIGNED_BYTE&&(ee=e.RG8)),S===e.RGBA){let ve=te?Gr:Je.getTransfer(re);B===e.FLOAT&&(ee=e.RGBA32F),B===e.HALF_FLOAT&&(ee=e.RGBA16F),B===e.UNSIGNED_BYTE&&(ee=ve==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT_4_4_4_4&&(ee=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(ee=e.RGB5_A1)}return(ee===e.R16F||ee===e.R32F||ee===e.RG16F||ee===e.RG32F||ee===e.RGBA16F||ee===e.RGBA32F)&&t.get("EXT_color_buffer_float"),ee}function M(A,S,B){return E(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==1003&&A.minFilter!==1006?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){return A===1003||A===1004||A===1005?e.NEAREST:e.LINEAR}function O(A){let S=A.target;S.removeEventListener("dispose",O),J(S),S.isVideoTexture&&g.delete(S)}function W(A){let S=A.target;S.removeEventListener("dispose",W),H(S)}function J(A){let S=r.get(A);if(S.__webglInit===void 0)return;let B=A.source,re=f.get(B);if(re){let te=re[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(A),Object.keys(re).length===0&&f.delete(B)}r.remove(A)}function P(A){let S=r.get(A);e.deleteTexture(S.__webglTexture);let B=A.source,re=f.get(B);delete re[S.__cacheKey],n.memory.textures--}function H(A){let S=A.texture,B=r.get(A),re=r.get(S);if(re.__webglTexture!==void 0&&(e.deleteTexture(re.__webglTexture),n.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(B.__webglFramebuffer[te]))for(let ee=0;ee<B.__webglFramebuffer[te].length;ee++)e.deleteFramebuffer(B.__webglFramebuffer[te][ee]);else e.deleteFramebuffer(B.__webglFramebuffer[te]);B.__webglDepthbuffer&&e.deleteRenderbuffer(B.__webglDepthbuffer[te])}else{if(Array.isArray(B.__webglFramebuffer))for(let te=0;te<B.__webglFramebuffer.length;te++)e.deleteFramebuffer(B.__webglFramebuffer[te]);else e.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&e.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&e.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let te=0;te<B.__webglColorRenderbuffer.length;te++)B.__webglColorRenderbuffer[te]&&e.deleteRenderbuffer(B.__webglColorRenderbuffer[te]);B.__webglDepthRenderbuffer&&e.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let te=0,ee=S.length;te<ee;te++){let ve=r.get(S[te]);ve.__webglTexture&&(e.deleteTexture(ve.__webglTexture),n.memory.textures--),r.remove(S[te])}r.remove(S),r.remove(A)}let X=0;function q(){X=0}function ae(){let A=X;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),X+=1,A}function j(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function U(A,S){let B=r.get(A);if(A.isVideoTexture&&nt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(B,A,S);return}}i.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+S)}function F(A,S){let B=r.get(A);A.version>0&&B.__version!==A.version?Ue(B,A,S):i.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+S)}function Q(A,S){let B=r.get(A);A.version>0&&B.__version!==A.version?Ue(B,A,S):i.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+S)}function ue(A,S){let B=r.get(A);A.version>0&&B.__version!==A.version?qe(B,A,S):i.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+S)}let me={[Qi]:e.REPEAT,[Ht]:e.CLAMP_TO_EDGE,[Fr]:e.MIRRORED_REPEAT},Te={[Et]:e.NEAREST,[ks]:e.NEAREST_MIPMAP_NEAREST,[Gs]:e.NEAREST_MIPMAP_LINEAR,[mt]:e.LINEAR,[Vs]:e.LINEAR_MIPMAP_NEAREST,[Ai]:e.LINEAR_MIPMAP_LINEAR},Oe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function we(A,S,B){if(B?(e.texParameteri(A,e.TEXTURE_WRAP_S,me[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,me[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,me[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,Te[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,Te[S.minFilter])):(e.texParameteri(A,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(A,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(S.wrapS!==1001||S.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(A,e.TEXTURE_MAG_FILTER,R(S.magFilter)),e.texParameteri(A,e.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==1003&&S.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Oe[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let re=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===1003||S.minFilter!==1005&&S.minFilter!==1008||S.type===1015&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===1016&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||r.get(S).__currentAnisotropy)&&(e.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy)}}function je(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",O));let re=S.source,te=f.get(re);te===void 0&&(te={},f.set(re,te));let ee=j(S);if(ee!==A.__cacheKey){te[ee]===void 0&&(te[ee]={texture:e.createTexture(),usedTimes:0},n.memory.textures++,B=!0),te[ee].usedTimes++;let ve=te[A.__cacheKey];ve!==void 0&&(te[A.__cacheKey].usedTimes--,ve.usedTimes===0&&P(S)),A.__cacheKey=ee,A.__webglTexture=te[ee].texture}return B}function Ue(A,S,B){let re=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=e.TEXTURE_3D);let te=je(A,S),ee=S.source;i.bindTexture(re,A.__webglTexture,e.TEXTURE0+B);let ve=r.get(ee);if(ee.version!==ve.__version||te===!0){i.activeTexture(e.TEXTURE0+B);let ne=Je.getPrimaries(Je.workingColorSpace),_e=S.colorSpace===""?null:Je.getPrimaries(S.colorSpace),Re=S.colorSpace===""||ne===_e?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Ye=T(S)&&x(S.image)===!1,ie=_(S.image,Ye,!1,c);ie=Lt(S,ie);let tt=x(ie)||o,Fe=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type),xe=D(S.internalFormat,Fe,Pe,S.colorSpace,S.isVideoTexture);we(re,S,tt);let Se,Xe=S.mipmaps,I=o&&S.isVideoTexture!==!0,de=ve.__version===void 0||te===!0,se=M(S,ie,tt);if(S.isDepthTexture)xe=e.DEPTH_COMPONENT,o?xe=S.type===1015?e.DEPTH_COMPONENT32F:S.type===1014?e.DEPTH_COMPONENT24:S.type===1020?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT16:S.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===1026&&xe===e.DEPTH_COMPONENT&&S.type!==1012&&S.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Br,Pe=s.convert(S.type)),S.format===1027&&xe===e.DEPTH_COMPONENT&&(xe=e.DEPTH_STENCIL,S.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ta,Pe=s.convert(S.type))),de&&(I?i.texStorage2D(e.TEXTURE_2D,1,xe,ie.width,ie.height):i.texImage2D(e.TEXTURE_2D,0,xe,ie.width,ie.height,0,Fe,Pe,null));else if(S.isDataTexture)if(Xe.length>0&&tt){I&&de&&i.texStorage2D(e.TEXTURE_2D,se,xe,Xe[0].width,Xe[0].height);for(let V=0,le=Xe.length;V<le;V++)Se=Xe[V],I?i.texSubImage2D(e.TEXTURE_2D,V,0,0,Se.width,Se.height,Fe,Pe,Se.data):i.texImage2D(e.TEXTURE_2D,V,xe,Se.width,Se.height,0,Fe,Pe,Se.data);S.generateMipmaps=!1}else I?(de&&i.texStorage2D(e.TEXTURE_2D,se,xe,ie.width,ie.height),i.texSubImage2D(e.TEXTURE_2D,0,0,0,ie.width,ie.height,Fe,Pe,ie.data)):i.texImage2D(e.TEXTURE_2D,0,xe,ie.width,ie.height,0,Fe,Pe,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&de&&i.texStorage3D(e.TEXTURE_2D_ARRAY,se,xe,Xe[0].width,Xe[0].height,ie.depth);for(let V=0,le=Xe.length;V<le;V++)Se=Xe[V],S.format===1023?I?i.texSubImage3D(e.TEXTURE_2D_ARRAY,V,0,0,0,Se.width,Se.height,ie.depth,Fe,Pe,Se.data):i.texImage3D(e.TEXTURE_2D_ARRAY,V,xe,Se.width,Se.height,ie.depth,0,Fe,Pe,Se.data):Fe===null?console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,V,0,0,0,Se.width,Se.height,ie.depth,Fe,Se.data,0,0):i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,V,xe,Se.width,Se.height,ie.depth,0,Se.data,0,0)}else{I&&de&&i.texStorage2D(e.TEXTURE_2D,se,xe,Xe[0].width,Xe[0].height);for(let V=0,le=Xe.length;V<le;V++)Se=Xe[V],S.format===1023?I?i.texSubImage2D(e.TEXTURE_2D,V,0,0,Se.width,Se.height,Fe,Pe,Se.data):i.texImage2D(e.TEXTURE_2D,V,xe,Se.width,Se.height,0,Fe,Pe,Se.data):Fe===null?console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?i.compressedTexSubImage2D(e.TEXTURE_2D,V,0,0,Se.width,Se.height,Fe,Se.data):i.compressedTexImage2D(e.TEXTURE_2D,V,xe,Se.width,Se.height,0,Se.data)}else if(S.isDataArrayTexture)I?(de&&i.texStorage3D(e.TEXTURE_2D_ARRAY,se,xe,ie.width,ie.height,ie.depth),i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Fe,Pe,ie.data)):i.texImage3D(e.TEXTURE_2D_ARRAY,0,xe,ie.width,ie.height,ie.depth,0,Fe,Pe,ie.data);else if(S.isData3DTexture)I?(de&&i.texStorage3D(e.TEXTURE_3D,se,xe,ie.width,ie.height,ie.depth),i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Fe,Pe,ie.data)):i.texImage3D(e.TEXTURE_3D,0,xe,ie.width,ie.height,ie.depth,0,Fe,Pe,ie.data);else if(S.isFramebufferTexture){if(de)if(I)i.texStorage2D(e.TEXTURE_2D,se,xe,ie.width,ie.height);else{let V=ie.width,le=ie.height;for(let be=0;be<se;be++)i.texImage2D(e.TEXTURE_2D,be,xe,V,le,0,Fe,Pe,null),V>>=1,le>>=1}}else if(Xe.length>0&&tt){I&&de&&i.texStorage2D(e.TEXTURE_2D,se,xe,Xe[0].width,Xe[0].height);for(let V=0,le=Xe.length;V<le;V++)Se=Xe[V],I?i.texSubImage2D(e.TEXTURE_2D,V,0,0,Fe,Pe,Se):i.texImage2D(e.TEXTURE_2D,V,xe,Fe,Pe,Se);S.generateMipmaps=!1}else I?(de&&i.texStorage2D(e.TEXTURE_2D,se,xe,ie.width,ie.height),i.texSubImage2D(e.TEXTURE_2D,0,0,0,Fe,Pe,ie)):i.texImage2D(e.TEXTURE_2D,0,xe,Fe,Pe,ie);E(S,tt)&&L(re),ve.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function qe(A,S,B){if(S.image.length!==6)return;let re=je(A,S),te=S.source;i.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+B);let ee=r.get(te);if(te.version!==ee.__version||re===!0){i.activeTexture(e.TEXTURE0+B);let ve=Je.getPrimaries(Je.workingColorSpace),ne=S.colorSpace===""?null:Je.getPrimaries(S.colorSpace),_e=S.colorSpace===""||ve===ne?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Re=S.isCompressedTexture||S.image[0].isCompressedTexture,Ye=S.image[0]&&S.image[0].isDataTexture,ie=[];for(let V=0;V<6;V++)!Re&&!Ye?ie[V]=_(S.image[V],!1,!0,h):ie[V]=Ye?S.image[V].image:S.image[V],ie[V]=Lt(S,ie[V]);let tt=ie[0],Fe=x(tt)||o,Pe=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),Se=D(S.internalFormat,Pe,xe,S.colorSpace),Xe=o&&S.isVideoTexture!==!0,I=ee.__version===void 0||re===!0,de=M(S,tt,Fe);we(e.TEXTURE_CUBE_MAP,S,Fe);let se;if(Re){Xe&&I&&i.texStorage2D(e.TEXTURE_CUBE_MAP,de,Se,tt.width,tt.height);for(let V=0;V<6;V++){se=ie[V].mipmaps;for(let le=0;le<se.length;le++){let be=se[le];S.format===1023?Xe?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,le,0,0,be.width,be.height,Pe,xe,be.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,le,Se,be.width,be.height,0,Pe,xe,be.data):Pe===null?console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,le,0,0,be.width,be.height,Pe,be.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,le,Se,be.width,be.height,0,be.data)}}}else{se=S.mipmaps,Xe&&I&&(se.length>0&&de++,i.texStorage2D(e.TEXTURE_CUBE_MAP,de,Se,ie[0].width,ie[0].height));for(let V=0;V<6;V++)if(Ye){Xe?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,ie[V].width,ie[V].height,Pe,xe,ie[V].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Se,ie[V].width,ie[V].height,0,Pe,xe,ie[V].data);for(let le=0;le<se.length;le++){let be=se[le].image[V].image;Xe?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,le+1,0,0,be.width,be.height,Pe,xe,be.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,le+1,Se,be.width,be.height,0,Pe,xe,be.data)}}else{Xe?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Pe,xe,ie[V]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Se,Pe,xe,ie[V]);for(let le=0;le<se.length;le++){let be=se[le];Xe?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,le+1,0,0,Pe,xe,be.image[V]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+V,le+1,Se,Pe,xe,be.image[V])}}}E(S,Fe)&&L(e.TEXTURE_CUBE_MAP),ee.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function C(A,S,B,re,te,ee){let ve=s.convert(B.format,B.colorSpace),ne=s.convert(B.type),_e=D(B.internalFormat,ve,ne,B.colorSpace);if(!r.get(S).__hasExternalTextures){let Re=Math.max(1,S.width>>ee),Ye=Math.max(1,S.height>>ee);te===e.TEXTURE_3D||te===e.TEXTURE_2D_ARRAY?i.texImage3D(te,ee,_e,Re,Ye,S.depth,0,ve,ne,null):i.texImage2D(te,ee,_e,Re,Ye,0,ve,ne,null)}i.bindFramebuffer(e.FRAMEBUFFER,A),Le(S)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,re,te,r.get(B).__webglTexture,0,Ge(S)):(te===e.TEXTURE_2D||te>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,re,te,r.get(B).__webglTexture,ee),i.bindFramebuffer(e.FRAMEBUFFER,null)}function oe(A,S,B){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let re=o===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(B||Le(S)){let te=S.depthTexture;te&&te.isDepthTexture&&(te.type===1015?re=e.DEPTH_COMPONENT32F:te.type===1014&&(re=e.DEPTH_COMPONENT24));let ee=Ge(S);Le(S)?d.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,re,S.width,S.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,re,S.width,S.height)}else e.renderbufferStorage(e.RENDERBUFFER,re,S.width,S.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let re=Ge(S);B&&Le(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,re,e.DEPTH24_STENCIL8,S.width,S.height):Le(S)?d.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,re,e.DEPTH24_STENCIL8,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,A)}else{let re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<re.length;te++){let ee=re[te],ve=s.convert(ee.format,ee.colorSpace),ne=s.convert(ee.type),_e=D(ee.internalFormat,ve,ne,ee.colorSpace),Re=Ge(S);B&&Le(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re,_e,S.width,S.height):Le(S)?d.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re,_e,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,_e,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function $(A,S){if(S&&S.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");r.get(S.depthTexture).__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);let B=r.get(S.depthTexture).__webglTexture,re=Ge(S);if(S.depthTexture.format===1026)Le(S)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,B,0,re):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,B,0);else if(S.depthTexture.format===1027)Le(S)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,B,0,re):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,B,0);else throw Error("Unknown depthTexture format")}function K(A){let S=r.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw Error("target.depthTexture not supported in Cube render targets");$(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=e.createRenderbuffer(),oe(S.__webglDepthbuffer[re],A,!1)}else i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=e.createRenderbuffer(),oe(S.__webglDepthbuffer,A,!1);i.bindFramebuffer(e.FRAMEBUFFER,null)}function Y(A,S,B){let re=r.get(A);S!==void 0&&C(re.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&K(A)}function Me(A){let S=A.texture,B=r.get(A),re=r.get(S);A.addEventListener("dispose",W),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=e.createTexture()),re.__version=S.version,n.memory.textures++);let te=A.isWebGLCubeRenderTarget===!0,ee=A.isWebGLMultipleRenderTargets===!0,ve=x(A)||o;if(te){B.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ne]=[];for(let _e=0;_e<S.mipmaps.length;_e++)B.__webglFramebuffer[ne][_e]=e.createFramebuffer()}else B.__webglFramebuffer[ne]=e.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)B.__webglFramebuffer[ne]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(ee)if(a.drawBuffers){let ne=A.texture;for(let _e=0,Re=ne.length;_e<Re;_e++){let Ye=r.get(ne[_e]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=e.createTexture(),n.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Le(A)===!1){let ne=ee?S:[S];B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _e=0;_e<ne.length;_e++){let Re=ne[_e];B.__webglColorRenderbuffer[_e]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[_e]);let Ye=s.convert(Re.format,Re.colorSpace),ie=s.convert(Re.type),tt=D(Re.internalFormat,Ye,ie,Re.colorSpace,A.isXRRenderTarget===!0),Fe=Ge(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe,tt,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,B.__webglColorRenderbuffer[_e])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),oe(B.__webglDepthRenderbuffer,A,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(te){i.bindTexture(e.TEXTURE_CUBE_MAP,re.__webglTexture),we(e.TEXTURE_CUBE_MAP,S,ve);for(let ne=0;ne<6;ne++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)C(B.__webglFramebuffer[ne][_e],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else C(B.__webglFramebuffer[ne],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);E(S,ve)&&L(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ee){let ne=A.texture;for(let _e=0,Re=ne.length;_e<Re;_e++){let Ye=ne[_e],ie=r.get(Ye);i.bindTexture(e.TEXTURE_2D,ie.__webglTexture),we(e.TEXTURE_2D,Ye,ve),C(B.__webglFramebuffer,A,Ye,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,0),E(Ye,ve)&&L(e.TEXTURE_2D)}i.unbindTexture()}else{let ne=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ne=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(ne,re.__webglTexture),we(ne,S,ve),o&&S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)C(B.__webglFramebuffer[_e],A,S,e.COLOR_ATTACHMENT0,ne,_e);else C(B.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,ne,0);E(S,ve)&&L(ne),i.unbindTexture()}A.depthBuffer&&K(A)}function fe(A){let S=x(A)||o,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,te=B.length;re<te;re++){let ee=B[re];if(E(ee,S)){let ve=A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,ne=r.get(ee).__webglTexture;i.bindTexture(ve,ne),L(ve),i.unbindTexture()}}}function ye(A){if(o&&A.samples>0&&Le(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,re=A.height,te=e.COLOR_BUFFER_BIT,ee=[],ve=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ne=r.get(A),_e=A.isWebGLMultipleRenderTargets===!0;if(_e)for(let Re=0;Re<S.length;Re++)i.bindFramebuffer(e.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ne.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){ee.push(e.COLOR_ATTACHMENT0+Re),A.depthBuffer&&ee.push(ve);let Ye=ne.__ignoreDepthValues!==void 0&&ne.__ignoreDepthValues;if(Ye===!1&&(A.depthBuffer&&(te|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&(te|=e.STENCIL_BUFFER_BIT)),_e&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ne.__webglColorRenderbuffer[Re]),Ye===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[ve]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[ve])),_e){let ie=r.get(S[Re]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ie,0)}e.blitFramebuffer(0,0,B,re,0,0,B,re,te,e.NEAREST),p&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ee)}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),_e)for(let Re=0;Re<S.length;Re++){i.bindFramebuffer(e.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.RENDERBUFFER,ne.__webglColorRenderbuffer[Re]);let Ye=r.get(S[Re]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ne.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.TEXTURE_2D,Ye,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function Ge(A){return Math.min(u,A.samples)}function Le(A){let S=r.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function nt(A){let S=n.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function Lt(A,S){let B=A.colorSpace,re=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===1035||B!=="srgb-linear"&&B!==""&&(Je.getTransfer(B)==="srgb"?o===!1?t.has("EXT_sRGB")===!0&&re===1023?(A.format=Xo,A.minFilter=mt,A.generateMipmaps=!1):S=en.sRGBToLinear(S):(re!==1023||te!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=ae,this.resetTextureUnits=q,this.setTexture2D=U,this.setTexture2DArray=F,this.setTexture3D=Q,this.setTextureCube=ue,this.rebindTextures=Y,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=C,this.useMultisampledRTT=Le}function Wl(e,t,i){let r=i.isWebGL2;function a(s,n=""){let o,l=Je.getTransfer(n);if(s===1009)return e.UNSIGNED_BYTE;if(s===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(s===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(s===1010)return e.BYTE;if(s===1011)return e.SHORT;if(s===1012)return e.UNSIGNED_SHORT;if(s===1013)return e.INT;if(s===1014)return e.UNSIGNED_INT;if(s===1015)return e.FLOAT;if(s===1016)return r?e.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o===null?null:o.HALF_FLOAT_OES);if(s===1021)return e.ALPHA;if(s===1023)return e.RGBA;if(s===1024)return e.LUMINANCE;if(s===1025)return e.LUMINANCE_ALPHA;if(s===1026)return e.DEPTH_COMPONENT;if(s===1027)return e.DEPTH_STENCIL;if(s===1035)return o=t.get("EXT_sRGB"),o===null?null:o.SRGB_ALPHA_EXT;if(s===1028)return e.RED;if(s===1029)return e.RED_INTEGER;if(s===1030)return e.RG;if(s===1031)return e.RG_INTEGER;if(s===1033)return e.RGBA_INTEGER;if(s===33776||s===33777||s===33778||s===33779)if(l==="srgb")if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===33776)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===33777)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===33778)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===33779)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===33776)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===33777)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===33778)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===33779)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===35840||s===35841||s===35842||s===35843)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===35840)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===35841)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===35842)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===35843)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===36196)return o=t.get("WEBGL_compressed_texture_etc1"),o===null?null:o.COMPRESSED_RGB_ETC1_WEBGL;if(s===37492||s===37496)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===37492)return l==="srgb"?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===37496)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===37808||s===37809||s===37810||s===37811||s===37812||s===37813||s===37814||s===37815||s===37816||s===37817||s===37818||s===37819||s===37820||s===37821)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===37808)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===37809)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===37810)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===37811)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===37812)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===37813)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===37814)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===37815)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===37816)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===37817)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===37818)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===37819)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===37820)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===37821)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===36492||s===36494||s===36495)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===36492)return l==="srgb"?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===36494)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===36495)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===36283||s===36284||s===36285||s===36286)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===36492)return o.COMPRESSED_RED_RGTC1_EXT;if(s===36284)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===36285)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===36286)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===1020?r?e.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o===null?null:o.UNSIGNED_INT_24_8_WEBGL):e[s]===void 0?null:e[s]}return{convert:a}}var Xl=class extends _t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},zi=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},gf={type:"move"},Ln=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null,n=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let d of e.hand.values()){let p=t.getJointPose(d,i),g=this._getHandJoint(l,d);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position);l.inputState.pinching&&u>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));n!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(n.matrix.fromArray(r.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,r.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(r.linearVelocity)):n.hasLinearVelocity=!1,r.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(r.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(gf)))}return n!==null&&(n.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Pn=class extends ft{constructor(e,t,i,r,a,s,n,o,l,h){if(h=h===void 0?Ws:h,h!==1026&&h!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===1026&&(i=Br),i===void 0&&h===1027&&(i=Ta),super(null,r,a,s,n,o,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=n===void 0?Et:n,this.minFilter=o===void 0?Et:o,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},vf=class extends ai{constructor(e,t){super();let i=this,r=null,a=1,s=null,n="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,p=null,g=t.getContextAttributes(),v=null,f=null,m=[],y=[],_=new _t;_.layers.enable(1),_.viewport=new $e;let x=new _t;x.layers.enable(2),x.viewport=new $e;let T=[_,x],E=new Xl;E.layers.enable(1),E.layers.enable(2);let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let F=m[U];return F===void 0&&(F=new Ln,m[U]=F),F.getTargetRaySpace()},this.getControllerGrip=function(U){let F=m[U];return F===void 0&&(F=new Ln,m[U]=F),F.getGripSpace()},this.getHand=function(U){let F=m[U];return F===void 0&&(F=new Ln,m[U]=F),F.getHandSpace()};function M(U){let F=y.indexOf(U.inputSource);if(F===-1)return;let Q=m[F];Q!==void 0&&(Q.update(U.inputSource,U.frame,l||s),Q.dispatchEvent({type:U.type,data:U.inputSource}))}function R(){r.removeEventListener("select",M),r.removeEventListener("selectstart",M),r.removeEventListener("selectend",M),r.removeEventListener("squeeze",M),r.removeEventListener("squeezestart",M),r.removeEventListener("squeezeend",M),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",O);for(let U=0;U<m.length;U++){let F=y[U];F!==null&&(y[U]=null,m[U].disconnect(F))}L=null,D=null,e.setRenderTarget(v),d=null,u=null,c=null,r=null,f=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){n=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return u===null?d:u},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",M),r.addEventListener("selectstart",M),r.addEventListener("selectend",M),r.addEventListener("squeeze",M),r.addEventListener("squeezestart",M),r.addEventListener("squeezeend",M),r.addEventListener("end",R),r.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let F={antialias:r.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,F),r.updateRenderState({baseLayer:d}),f=new kt(d.framebufferWidth,d.framebufferHeight,{format:Ri,type:er,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let F=null,Q=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=g.stencil?Fo:Ws,Q=g.stencil?Ta:Br);let me={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:a};c=new XRWebGLBinding(r,t),u=c.createProjectionLayer(me),r.updateRenderState({layers:[u]}),f=new kt(u.textureWidth,u.textureHeight,{format:Ri,type:er,depthTexture:new Pn(u.textureWidth,u.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let Te=e.properties.get(f);Te.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await r.requestReferenceSpace(n),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(U){for(let F=0;F<U.removed.length;F++){let Q=U.removed[F],ue=y.indexOf(Q);ue>=0&&(y[ue]=null,m[ue].disconnect(Q))}for(let F=0;F<U.added.length;F++){let Q=U.added[F],ue=y.indexOf(Q);if(ue===-1){for(let Te=0;Te<m.length;Te++)if(Te>=y.length){y.push(Q),ue=Te;break}else if(y[Te]===null){y[Te]=Q,ue=Te;break}if(ue===-1)break}let me=m[ue];me&&me.connect(Q)}}let W=new w,J=new w;function P(U,F,Q){W.setFromMatrixPosition(F.matrixWorld),J.setFromMatrixPosition(Q.matrixWorld);let ue=W.distanceTo(J),me=F.projectionMatrix.elements,Te=Q.projectionMatrix.elements,Oe=me[14]/(me[10]-1),we=me[14]/(me[10]+1),je=(me[9]+1)/me[5],Ue=(me[9]-1)/me[5],qe=(me[8]-1)/me[0],C=(Te[8]+1)/Te[0],oe=Oe*qe,$=Oe*C,K=ue/(-qe+C),Y=K*-qe;F.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Y),U.translateZ(K),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();let Me=Oe+K,fe=we+K,ye=oe-Y,Ge=$+(ue-Y),Le=je*we/fe*Me,nt=Ue*we/fe*Me;U.projectionMatrix.makePerspective(ye,Ge,Le,nt,Me,fe),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function H(U,F){F===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(F.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;E.near=x.near=_.near=U.near,E.far=x.far=_.far=U.far,(L!==E.near||D!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,D=E.far);let F=U.parent,Q=E.cameras;H(E,F);for(let ue=0;ue<Q.length;ue++)H(Q[ue],F);Q.length===2?P(E,_,x):E.projectionMatrix.copy(_.projectionMatrix),X(U,E,F)};function X(U,F,Q){Q===null?U.matrix.copy(F.matrixWorld):(U.matrix.copy(Q.matrixWorld),U.matrix.invert(),U.matrix.multiply(F.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(F.projectionMatrix),U.projectionMatrixInverse.copy(F.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=ir*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(u!==null||d!==null)return o},this.setFoveation=function(U){o=U,u!==null&&(u.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)};let q=null;function ae(U,F){if(h=F.getViewerPose(l||s),p=F,h!==null){let Q=h.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let ue=!1;Q.length!==E.cameras.length&&(E.cameras.length=0,ue=!0);for(let me=0;me<Q.length;me++){let Te=Q[me],Oe=null;if(d!==null)Oe=d.getViewport(Te);else{let je=c.getViewSubImage(u,Te);Oe=je.viewport,me===0&&(e.setRenderTargetTextures(f,je.colorTexture,u.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(f))}let we=T[me];we===void 0&&(we=new _t,we.layers.enable(me),we.viewport=new $e,T[me]=we),we.matrix.fromArray(Te.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Te.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),me===0&&(E.matrix.copy(we.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ue===!0&&E.cameras.push(we)}}for(let Q=0;Q<m.length;Q++){let ue=y[Q],me=m[Q];ue!==null&&me!==void 0&&me.update(ue,F,l||s)}q&&q(U,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),p=null}let j=new _l;j.setAnimationLoop(ae),this.setAnimationLoop=function(U){q=U},this.dispose=function(){}}};function _f(e,t){function i(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function r(f,m){m.color.getRGB(f.fogColor.value,ml(e)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function a(f,m,y,_,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(f,m):m.isMeshToonMaterial?(s(f,m),u(f,m)):m.isMeshPhongMaterial?(s(f,m),c(f,m)):m.isMeshStandardMaterial?(s(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,x)):m.isMeshMatcapMaterial?(s(f,m),g(f,m)):m.isMeshDepthMaterial?s(f,m):m.isMeshDistanceMaterial?(s(f,m),v(f,m)):m.isMeshNormalMaterial?s(f,m):m.isLineBasicMaterial?(n(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,y,_):m.isSpriteMaterial?h(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,i(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,i(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===1&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,i(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===1&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,i(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,i(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let y=t.get(m).envMap;if(y&&(f.envMap.value=y,f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;let _=e._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*_,i(m.lightMap,f.lightMapTransform)}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,f.aoMapTransform))}function n(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,i(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,y,_){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*y,f.scale.value=_*.5,m.map&&(f.map.value=m.map,i(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,i(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,f.roughnessMapTransform)),t.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,y){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===1&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){let y=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function yf(e,t,i,r){let a={},s={},n=[],o=i.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let x=_.program;r.uniformBlockBinding(y,x)}function h(y,_){let x=a[y.id];x===void 0&&(g(y),x=c(y),a[y.id]=x,y.addEventListener("dispose",f));let T=_.program;r.updateUBOMapping(y,T);let E=t.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function c(y){let _=u();y.__bindingPointIndex=_;let x=e.createBuffer(),T=y.__size,E=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,T,E),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<o;y++)if(n.indexOf(y)===-1)return n.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=a[y.id],x=y.uniforms,T=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let E=0,L=x.length;E<L;E++){let D=x[E];if(p(D,E,T)===!0){let M=D.__offset,R=Array.isArray(D.value)?D.value:[D.value],O=0;for(let W=0;W<R.length;W++){let J=R[W],P=v(J);typeof J=="number"?(D.__data[0]=J,e.bufferSubData(e.UNIFORM_BUFFER,M+O,D.__data)):J.isMatrix3?(D.__data[0]=J.elements[0],D.__data[1]=J.elements[1],D.__data[2]=J.elements[2],D.__data[3]=J.elements[0],D.__data[4]=J.elements[3],D.__data[5]=J.elements[4],D.__data[6]=J.elements[5],D.__data[7]=J.elements[0],D.__data[8]=J.elements[6],D.__data[9]=J.elements[7],D.__data[10]=J.elements[8],D.__data[11]=J.elements[0]):(J.toArray(D.__data,O),O+=P.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,M,D.__data)}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,_,x){let T=y.value;if(x[_]===void 0){if(typeof T=="number")x[_]=T;else{let E=Array.isArray(T)?T:[T],L=[];for(let D=0;D<E.length;D++)L.push(E[D].clone());x[_]=L}return!0}if(typeof T=="number"){if(x[_]!==T)return x[_]=T,!0}else{let E=Array.isArray(x[_])?x[_]:[x[_]],L=Array.isArray(T)?T:[T];for(let D=0;D<E.length;D++){let M=E[D];if(M.equals(L[D])===!1)return M.copy(L[D]),!0}}return!1}function g(y){let _=y.uniforms,x=0,T=0;for(let E=0,L=_.length;E<L;E++){let D=_[E],M={boundary:0,storage:0},R=Array.isArray(D.value)?D.value:[D.value];for(let O=0,W=R.length;O<W;O++){let J=R[O],P=v(J);M.boundary+=P.boundary,M.storage+=P.storage}if(D.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,E>0){T=x%16;let O=16-T;T!==0&&O-M.boundary<0&&(x+=16-T,D.__offset=x)}x+=M.storage}return T=x%16,T>0&&(x+=16-T),y.__size=x,y.__cache={},this}function v(y){let _={boundary:0,storage:0};return typeof y=="number"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function f(y){let _=y.target;_.removeEventListener("dispose",f);let x=n.indexOf(_.__bindingPointIndex);n.splice(x,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function m(){for(let y in a)e.deleteBuffer(a[y]);n=[],a={},s={}}return{bind:l,update:h,dispose:m}}var In=class{constructor(e={}){let{canvas:t=Zo(),context:i=null,depth:r=!0,stencil:a=!0,alpha:s=!1,antialias:n=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let u;u=i===null?s:i.getContextAttributes().alpha;let d=new Uint32Array(4),p=new Int32Array(4),g=null,v=null,f=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let y=this,_=!1,x=0,T=0,E=null,L=-1,D=null,M=new $e,R=new $e,O=null,W=new pe(0),J=0,P=t.width,H=t.height,X=1,q=null,ae=null,j=new $e(0,0,P,H),U=new $e(0,0,P,H),F=!1,Q=new Qr,ue=!1,me=!1,Te=null,Oe=new Ne,we=new Z,je=new w,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return E===null?X:1}let C=i;function oe(b,N){for(let z=0;z<b.length;z++){let k=b[z],G=t.getContext(k,N);if(G!==null)return G}return null}try{let b={alpha:!0,depth:r,stencil:a,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r158"),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",I,!1),C===null){let N=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&N.shift(),C=oe(N,b),C===null)throw oe(N)?Error("Error creating WebGL context with your selected attributes."):Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let $,K,Y,Me,fe,ye,Ge,Le,nt,Lt,A,S,B,re,te,ee,ve,ne,_e,Re,Ye,ie,tt,Fe;function Pe(){$=new Up(C),K=new Ap(C,$,e),$.init(K),ie=new Wl(C,$,K),Y=new mf(C,$,K),Me=new Op(C),fe=new tf,ye=new ff(C,$,Y,fe,K,ie,Me),Ge=new Cp(y),Le=new Ip(y),nt=new bp(C,K),tt=new Ep(C,$,nt,K),Lt=new Dp(C,nt,Me,tt),A=new Hp(C,Lt,nt,Me),_e=new zp(C,K,ye),ee=new Rp(fe),S=new ef(y,Ge,Le,$,K,tt,ee),B=new _f(y,fe),re=new af,te=new cf($,K),ne=new Tp(y,Ge,Le,Y,A,u,o),ve=new pf(y,A,K),Fe=new yf(C,Me,K,Y),Re=new wp(C,$,Me,K),Ye=new Np(C,$,Me,K),Me.programs=S.programs,y.capabilities=K,y.extensions=$,y.properties=fe,y.renderLists=re,y.shadowMap=ve,y.state=Y,y.info=Me}Pe();let xe=new vf(y,C);this.xr=xe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=$.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=$.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(P,H,!1))},this.getSize=function(b){return b.set(P,H)},this.setSize=function(b,N,z=!0){xe.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(P=b,H=N,t.width=Math.floor(b*X),t.height=Math.floor(N*X),z===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N))},this.getDrawingBufferSize=function(b){return b.set(P*X,H*X).floor()},this.setDrawingBufferSize=function(b,N,z){P=b,H=N,X=z,t.width=Math.floor(b*z),t.height=Math.floor(N*z),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,N,z,k){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,N,z,k),Y.viewport(M.copy(j).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(U)},this.setScissor=function(b,N,z,k){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,N,z,k),Y.scissor(R.copy(U).multiplyScalar(X).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(b){Y.setScissorTest(F=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){ae=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(b=!0,N=!0,z=!0){let k=0;if(b){let G=!1;if(E!==null){let he=E.texture.format;G=he===1033||he===1031||he===1029}if(G){let he=E.texture.type,Ee=he===1009||he===1014||he===1012||he===1020||he===1017||he===1018,Ae=ne.getClearColor(),Ce=ne.getClearAlpha(),Ve=Ae.r,Be=Ae.g,ze=Ae.b;Ee?(d[0]=Ve,d[1]=Be,d[2]=ze,d[3]=Ce,C.clearBufferuiv(C.COLOR,0,d)):(p[0]=Ve,p[1]=Be,p[2]=ze,p[3]=Ce,C.clearBufferiv(C.COLOR,0,p))}else k|=C.COLOR_BUFFER_BIT}N&&(k|=C.DEPTH_BUFFER_BIT),z&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",I,!1),re.dispose(),te.dispose(),fe.dispose(),Ge.dispose(),Le.dispose(),A.dispose(),tt.dispose(),Fe.dispose(),S.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",pt),xe.removeEventListener("sessionend",Bt),Te&&=(Te.dispose(),null),Ze.stop()};function Se(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let b=Me.autoReset,N=ve.enabled,z=ve.autoUpdate,k=ve.needsUpdate,G=ve.type;Pe(),Me.autoReset=b,ve.enabled=N,ve.autoUpdate=z,ve.needsUpdate=k,ve.type=G}function I(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function de(b){let N=b.target;N.removeEventListener("dispose",de),se(N)}function se(b){V(b),fe.remove(b)}function V(b){let N=fe.get(b).programs;N!==void 0&&(N.forEach(function(z){S.releaseProgram(z)}),b.isShaderMaterial&&S.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,z,k,G,he){N===null&&(N=Ue);let Ee=G.isMesh&&G.matrixWorld.determinant()<0,Ae=pu(b,N,z,k,G);Y.setMaterial(k,Ee);let Ce=z.index,Ve=1;if(k.wireframe===!0){if(Ce=Lt.getWireframeAttribute(z),Ce===void 0)return;Ve=2}let Be=z.drawRange,ze=z.attributes.position,Mt=Be.start*Ve,ct=(Be.start+Be.count)*Ve;he!==null&&(Mt=Math.max(Mt,he.start*Ve),ct=Math.min(ct,(he.start+he.count)*Ve)),Ce===null?ze!=null&&(Mt=Math.max(Mt,0),ct=Math.min(ct,ze.count)):(Mt=Math.max(Mt,0),ct=Math.min(ct,Ce.count));let zt=ct-Mt;if(zt<0||zt===1/0)return;tt.setup(G,k,Ae,z,Ce);let ti,lt=Re;if(Ce!==null&&(ti=nt.get(Ce),lt=Ye,lt.setIndex(ti)),G.isMesh)k.wireframe===!0?(Y.setLineWidth(k.wireframeLinewidth*qe()),lt.setMode(C.LINES)):lt.setMode(C.TRIANGLES);else if(G.isLine){let We=k.linewidth;We===void 0&&(We=1),Y.setLineWidth(We*qe()),G.isLineSegments?lt.setMode(C.LINES):G.isLineLoop?lt.setMode(C.LINE_LOOP):lt.setMode(C.LINE_STRIP)}else G.isPoints?lt.setMode(C.POINTS):G.isSprite&&lt.setMode(C.TRIANGLES);if(G.isInstancedMesh)lt.renderInstances(Mt,zt,G.count);else if(z.isInstancedBufferGeometry){let We=z._maxInstanceCount===void 0?1/0:z._maxInstanceCount,Fs=Math.min(z.instanceCount,We);lt.renderInstances(Mt,zt,Fs)}else lt.render(Mt,zt)};function le(b,N,z){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=1,b.needsUpdate=!0,Ma(b,N,z),b.side=0,b.needsUpdate=!0,Ma(b,N,z),b.side=2):Ma(b,N,z)}this.compile=function(b,N,z=null){z===null&&(z=b),v=te.get(z),v.init(),m.push(v),z.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),b!==z&&b.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights(y._useLegacyLights);let k=new Set;return b.traverse(function(G){let he=G.material;if(he)if(Array.isArray(he))for(let Ee=0;Ee<he.length;Ee++){let Ae=he[Ee];le(Ae,z,G),k.add(Ae)}else le(he,z,G),k.add(he)}),m.pop(),v=null,k},this.compileAsync=function(b,N,z=null){let k=this.compile(b,N,z);return new Promise(G=>{function he(){k.forEach(function(Ee){fe.get(Ee).currentProgram.isReady()&&k.delete(Ee)}),k.size===0?G(b):setTimeout(he,10)}$.get("KHR_parallel_shader_compile")===null?setTimeout(he,10):he()})};let be=null;function it(b){be&&be(b)}function pt(){Ze.stop()}function Bt(){Ze.start()}let Ze=new _l;Ze.setAnimationLoop(it),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(b){be=b,xe.setAnimationLoop(b),b===null?Ze.stop():Ze.start()},xe.addEventListener("sessionstart",pt),xe.addEventListener("sessionend",Bt),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(N),N=xe.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,N,E),v=te.get(b,m.length),v.init(),m.push(v),Oe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(Oe),me=this.localClippingEnabled,ue=ee.init(this.clippingPlanes,me),g=re.get(b,f.length),g.init(),f.push(g),Kt(b,N,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(q,ae),this.info.render.frame++,ue===!0&&ee.beginShadows();let z=v.state.shadowsArray;if(ve.render(z,b,N),ue===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(g,b),v.setupLights(y._useLegacyLights),N.isArrayCamera){let k=N.cameras;for(let G=0,he=k.length;G<he;G++){let Ee=k[G];$t(g,b,Ee,Ee.viewport)}}else $t(g,b,N);E!==null&&(ye.updateMultisampleRenderTarget(E),ye.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(y,b,N),tt.resetDefaultState(),L=-1,D=null,m.pop(),v=m.length>0?m[m.length-1]:null,f.pop(),g=f.length>0?f[f.length-1]:null};function Kt(b,N,z,k){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){k&&je.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Oe);let he=A.update(b),Ee=b.material;Ee.visible&&g.push(b,he,Ee,z,je.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){let he=A.update(b),Ee=b.material;if(k&&(b.boundingSphere===void 0?(he.boundingSphere===null&&he.computeBoundingSphere(),je.copy(he.boundingSphere.center)):(b.boundingSphere===null&&b.computeBoundingSphere(),je.copy(b.boundingSphere.center)),je.applyMatrix4(b.matrixWorld).applyMatrix4(Oe)),Array.isArray(Ee)){let Ae=he.groups;for(let Ce=0,Ve=Ae.length;Ce<Ve;Ce++){let Be=Ae[Ce],ze=Ee[Be.materialIndex];ze&&ze.visible&&g.push(b,he,ze,z,je.z,Be)}}else Ee.visible&&g.push(b,he,Ee,z,je.z,null)}}let G=b.children;for(let he=0,Ee=G.length;he<Ee;he++)Kt(G[he],N,z,k)}function $t(b,N,z,k){let G=b.opaque,he=b.transmissive,Ee=b.transparent;v.setupLightsView(z),ue===!0&&ee.setGlobalState(y.clippingPlanes,z),he.length>0&&du(G,he,N,z),k&&Y.viewport(M.copy(k)),G.length>0&&xa(G,N,z),he.length>0&&xa(he,N,z),Ee.length>0&&xa(Ee,N,z),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function du(b,N,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let G=K.isWebGL2;Te===null&&(Te=new kt(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?ba:er,minFilter:Ai,samples:G?4:0})),y.getDrawingBufferSize(we),G?Te.setSize(we.x,we.y):Te.setSize(La(we.x),La(we.y));let he=y.getRenderTarget();y.setRenderTarget(Te),y.getClearColor(W),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear();let Ee=y.toneMapping;y.toneMapping=0,xa(b,z,k),ye.updateMultisampleRenderTarget(Te),ye.updateRenderTargetMipmap(Te);let Ae=!1;for(let Ce=0,Ve=N.length;Ce<Ve;Ce++){let Be=N[Ce],ze=Be.object,Mt=Be.geometry,ct=Be.material,zt=Be.group;if(ct.side===2&&ze.layers.test(k.layers)){let ti=ct.side;ct.side=1,ct.needsUpdate=!0,Lo(ze,z,k,Mt,ct,zt),ct.side=ti,ct.needsUpdate=!0,Ae=!0}}Ae===!0&&(ye.updateMultisampleRenderTarget(Te),ye.updateRenderTargetMipmap(Te)),y.setRenderTarget(he),y.setClearColor(W,J),y.toneMapping=Ee}function xa(b,N,z){let k=N.isScene===!0?N.overrideMaterial:null;for(let G=0,he=b.length;G<he;G++){let Ee=b[G],Ae=Ee.object,Ce=Ee.geometry,Ve=k===null?Ee.material:k,Be=Ee.group;Ae.layers.test(z.layers)&&Lo(Ae,N,z,Ce,Ve,Be)}}function Lo(b,N,z,k,G,he){b.onBeforeRender(y,N,z,k,G,he),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(y,N,z,k,b,he),G.transparent===!0&&G.side===2&&G.forceSinglePass===!1?(G.side=1,G.needsUpdate=!0,y.renderBufferDirect(z,N,k,G,b,he),G.side=0,G.needsUpdate=!0,y.renderBufferDirect(z,N,k,G,b,he),G.side=2):y.renderBufferDirect(z,N,k,G,b,he),b.onAfterRender(y,N,z,k,G,he)}function Ma(b,N,z){N.isScene!==!0&&(N=Ue);let k=fe.get(b),G=v.state.lights,he=v.state.shadowsArray,Ee=G.state.version,Ae=S.getParameters(b,G.state,he,N,z),Ce=S.getProgramCacheKey(Ae),Ve=k.programs;k.environment=b.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(b.isMeshStandardMaterial?Le:Ge).get(b.envMap||k.environment),Ve===void 0&&(b.addEventListener("dispose",de),Ve=new Map,k.programs=Ve);let Be=Ve.get(Ce);if(Be!==void 0){if(k.currentProgram===Be&&k.lightsStateVersion===Ee)return Io(b,Ae),Be}else Ae.uniforms=S.getUniforms(b),b.onBuild(z,Ae,y),b.onBeforeCompile(Ae,y),Be=S.acquireProgram(Ae,Ce),Ve.set(Ce,Be),k.uniforms=Ae.uniforms;let ze=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=ee.uniform),Io(b,Ae),k.needsLights=fu(b),k.lightsStateVersion=Ee,k.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),k.currentProgram=Be,k.uniformsList=null,Be}function Po(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=ss.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Io(b,N){let z=fe.get(b);z.outputColorSpace=N.outputColorSpace,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function pu(b,N,z,k,G){N.isScene!==!0&&(N=Ue),ye.resetTextureUnits();let he=N.fog,Ee=k.isMeshStandardMaterial?N.environment:null,Ae=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ri,Ce=(k.isMeshStandardMaterial?Le:Ge).get(k.envMap||Ee),Ve=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Be=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ze=!!z.morphAttributes.position,Mt=!!z.morphAttributes.normal,ct=!!z.morphAttributes.color,zt=0;k.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(zt=y.toneMapping);let ti=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,lt=ti===void 0?0:ti.length,We=fe.get(k),Fs=v.state.lights;if(ue===!0&&(me===!0||b!==D)){let Dt=b===D&&k.id===L;ee.setState(k,b,Dt)}let ii=!1;k.version===We.__version?We.needsLights&&We.lightsStateVersion!==Fs.state.version?ii=!0:We.outputColorSpace===Ae?G.isInstancedMesh&&We.instancing===!1||!G.isInstancedMesh&&We.instancing===!0||G.isSkinnedMesh&&We.skinning===!1||!G.isSkinnedMesh&&We.skinning===!0||G.isInstancedMesh&&We.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&We.instancingColor===!1&&G.instanceColor!==null?ii=!0:We.envMap===Ce?k.fog===!0&&We.fog!==he||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ee.numPlanes||We.numIntersection!==ee.numIntersection)?ii=!0:We.vertexAlphas===Ve&&We.vertexTangents===Be&&We.morphTargets===ze&&We.morphNormals===Mt&&We.morphColors===ct&&We.toneMapping===zt?K.isWebGL2===!0&&We.morphTargetsCount!==lt&&(ii=!0):ii=!0:ii=!0:ii=!0:(ii=!0,We.__version=k.version);let Ei=We.currentProgram;ii===!0&&(Ei=Ma(k,N,G));let Uo=!1,Or=!1,Bs=!1,Tt=Ei.getUniforms(),wi=We.uniforms;if(Y.useProgram(Ei.program)&&(Uo=!0,Or=!0,Bs=!0),k.id!==L&&(L=k.id,Or=!0),Uo||D!==b){Tt.setValue(C,"projectionMatrix",b.projectionMatrix),Tt.setValue(C,"viewMatrix",b.matrixWorldInverse);let Dt=Tt.map.cameraPosition;Dt!==void 0&&Dt.setValue(C,je.setFromMatrixPosition(b.matrixWorld)),K.logarithmicDepthBuffer&&Tt.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Tt.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),D!==b&&(D=b,Or=!0,Bs=!0)}if(G.isSkinnedMesh){Tt.setOptional(C,G,"bindMatrix"),Tt.setOptional(C,G,"bindMatrixInverse");let Dt=G.skeleton;Dt&&(K.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),Tt.setValue(C,"boneTexture",Dt.boneTexture,ye),Tt.setValue(C,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let zs=z.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0&&K.isWebGL2===!0)&&_e.update(G,z,Ei),(Or||We.receiveShadow!==G.receiveShadow)&&(We.receiveShadow=G.receiveShadow,Tt.setValue(C,"receiveShadow",G.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(wi.envMap.value=Ce,wi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Or&&(Tt.setValue(C,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&mu(wi,Bs),he&&k.fog===!0&&B.refreshFogUniforms(wi,he),B.refreshMaterialUniforms(wi,k,X,H,Te),ss.upload(C,Po(We),wi,ye)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ss.upload(C,Po(We),wi,ye),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Tt.setValue(C,"center",G.center),Tt.setValue(C,"modelViewMatrix",G.modelViewMatrix),Tt.setValue(C,"normalMatrix",G.normalMatrix),Tt.setValue(C,"modelMatrix",G.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Dt=k.uniformsGroups;for(let Hs=0,gu=Dt.length;Hs<gu;Hs++)if(K.isWebGL2){let Do=Dt[Hs];Fe.update(Do,Ei),Fe.bind(Do,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function mu(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function fu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,N,z){fe.get(b.texture).__webglTexture=N,fe.get(b.depthTexture).__webglTexture=z;let k=fe.get(b);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,N){let z=fe.get(b);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,z=0){E=b,x=N,T=z;let k=!0,G=null,he=!1,Ee=!1;if(b){let Ae=fe.get(b);Ae.__useDefaultFramebuffer===void 0?Ae.__webglFramebuffer===void 0?ye.setupRenderTarget(b):Ae.__hasExternalTextures&&ye.rebindTextures(b,fe.get(b.texture).__webglTexture,fe.get(b.depthTexture).__webglTexture):(Y.bindFramebuffer(C.FRAMEBUFFER,null),k=!1);let Ce=b.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Ee=!0);let Ve=fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(G=Array.isArray(Ve[N])?Ve[N][z]:Ve[N],he=!0):G=K.isWebGL2&&b.samples>0&&ye.useMultisampledRTT(b)===!1?fe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?Ve[z]:Ve,M.copy(b.viewport),R.copy(b.scissor),O=b.scissorTest}else M.copy(j).multiplyScalar(X).floor(),R.copy(U).multiplyScalar(X).floor(),O=F;if(Y.bindFramebuffer(C.FRAMEBUFFER,G)&&K.drawBuffers&&k&&Y.drawBuffers(b,G),Y.viewport(M),Y.scissor(R),Y.setScissorTest(O),he){let Ae=fe.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,z)}else if(Ee){let Ae=fe.get(b.texture),Ce=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ae.__webglTexture,z||0,Ce)}L=-1},this.readRenderTargetPixels=function(b,N,z,k,G,he,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){Y.bindFramebuffer(C.FRAMEBUFFER,Ae);try{let Ce=b.texture,Ve=Ce.format,Be=Ce.type;if(Ve!==1023&&ie.convert(Ve)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ze=Be===1016&&($.has("EXT_color_buffer_half_float")||K.isWebGL2&&$.has("EXT_color_buffer_float"));if(Be!==1009&&ie.convert(Be)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===1015&&(K.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-k&&z>=0&&z<=b.height-G&&C.readPixels(N,z,k,G,ie.convert(Ve),ie.convert(Be),he)}finally{let Ce=E===null?null:fe.get(E).__webglFramebuffer;Y.bindFramebuffer(C.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(b,N,z=0){let k=2**-z,G=Math.floor(N.image.width*k),he=Math.floor(N.image.height*k);ye.setTexture2D(N,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,b.x,b.y,G,he),Y.unbindTexture()},this.copyTextureToTexture=function(b,N,z,k=0){let G=N.image.width,he=N.image.height,Ee=ie.convert(z.format),Ae=ie.convert(z.type);ye.setTexture2D(z,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,z.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,z.unpackAlignment),N.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,k,b.x,b.y,G,he,Ee,Ae,N.image.data):N.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,k,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,Ee,N.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,k,b.x,b.y,Ee,Ae,N.image),k===0&&z.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(b,N,z,k,G=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let he=b.max.x-b.min.x+1,Ee=b.max.y-b.min.y+1,Ae=b.max.z-b.min.z+1,Ce=ie.convert(k.format),Ve=ie.convert(k.type),Be;if(k.isData3DTexture)ye.setTexture3D(k,0),Be=C.TEXTURE_3D;else if(k.isDataArrayTexture)ye.setTexture2DArray(k,0),Be=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);let ze=C.getParameter(C.UNPACK_ROW_LENGTH),Mt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ct=C.getParameter(C.UNPACK_SKIP_PIXELS),zt=C.getParameter(C.UNPACK_SKIP_ROWS),ti=C.getParameter(C.UNPACK_SKIP_IMAGES),lt=z.isCompressedTexture?z.mipmaps[0]:z.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,lt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,lt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,b.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,b.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,b.min.z),z.isDataTexture||z.isData3DTexture?C.texSubImage3D(Be,G,N.x,N.y,N.z,he,Ee,Ae,Ce,Ve,lt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Be,G,N.x,N.y,N.z,he,Ee,Ae,Ce,lt.data)):C.texSubImage3D(Be,G,N.x,N.y,N.z,he,Ee,Ae,Ce,Ve,lt),C.pixelStorei(C.UNPACK_ROW_LENGTH,ze),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Mt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ct),C.pixelStorei(C.UNPACK_SKIP_ROWS,zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ti),G===0&&k.generateMipmaps&&C.generateMipmap(Be),Y.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?ye.setTextureCube(b,0):b.isData3DTexture?ye.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ye.setTexture2DArray(b,0):ye.setTexture2D(b,0),Y.unbindTexture()},this.resetState=function(){x=0,T=0,E=null,Y.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e==="display-p3"?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace==="display-p3-linear"?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace==="srgb"?qs:js}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===3001?yt:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},jl=class extends In{};jl.prototype.isWebGL1Renderer=!0;var ql=class Gc{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(t),this.density=i}clone(){return new Gc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Un=class Vc{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new pe(t),this.near=i,this.far=r}clone(){return new Vc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dn=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ns=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ca,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Nt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rt=new w,ia=class Wc{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Rt.fromBufferAttribute(this,i),Rt.applyMatrix4(t),this.setXYZ(i,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Rt.fromBufferAttribute(this,i),Rt.applyNormalMatrix(t),this.setXYZ(i,Rt.x,Rt.y,Rt.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Rt.fromBufferAttribute(this,i),Rt.transformDirection(t),this.setXYZ(i,Rt.x,Rt.y,Rt.z);return this}setX(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Pt(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Pt(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Pt(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Pt(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=De(i,this.array),r=De(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=De(i,this.array),r=De(r,this.array),a=De(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=De(i,this.array),r=De(r,this.array),a=De(a,this.array),s=De(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[a+s])}return new Qe(new this.array.constructor(i),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nn=class extends xt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wr,ra=new w,Ar=new w,Rr=new w,Cr=new Z,aa=new Z,Yl=new Ne,os=new w,sa=new w,ls=new w,Zl=new Z,On=new Z,Jl=new Z,Kl=class extends Ke{constructor(e=new Nn){if(super(),this.isSprite=!0,this.type="Sprite",wr===void 0){wr=new ke;let t=new ns(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);wr.setIndex([0,1,2,0,2,3]),wr.setAttribute("position",new ia(t,3,0,!1)),wr.setAttribute("uv",new ia(t,2,3,!1))}this.geometry=wr,this.material=e,this.center=new Z(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ar.setFromMatrixScale(this.matrixWorld),Yl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ar.multiplyScalar(-Rr.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let s=this.center;hs(os.set(-.5,-.5,0),Rr,s,Ar,r,a),hs(sa.set(.5,-.5,0),Rr,s,Ar,r,a),hs(ls.set(.5,.5,0),Rr,s,Ar,r,a),Zl.set(0,0),On.set(1,0),Jl.set(1,1);let n=e.ray.intersectTriangle(os,sa,ls,!1,ra);if(n===null&&(hs(sa.set(-.5,.5,0),Rr,s,Ar,r,a),On.set(0,1),n=e.ray.intersectTriangle(os,ls,sa,!1,ra),n===null))return;let o=e.ray.origin.distanceTo(ra);o<e.near||o>e.far||t.push({distance:o,point:ra.clone(),uv:Ni.getInterpolation(ra,os,sa,ls,Zl,On,Jl,new Z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function hs(e,t,i,r,a,s){Cr.subVectors(e,i).addScalar(.5).multiply(r),a===void 0?aa.copy(Cr):(aa.x=s*Cr.x-a*Cr.y,aa.y=a*Cr.x+s*Cr.y),e.copy(t),e.x+=aa.x,e.y+=aa.y,e.applyMatrix4(Yl)}var cs=new w,$l=new w,Ql=class extends Ke{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let i=0,r=t.length;i<r;i++){let a=t[i];this.addLevel(a.object.clone(),a.distance,a.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);let r=this.levels,a=0;for(;a<r.length&&!(t<r[a].distance);a++);return r.splice(a,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),e<a)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){cs.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(cs);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){cs.setFromMatrixPosition(e.matrixWorld),$l.setFromMatrixPosition(this.matrixWorld);let i=cs.distanceTo($l)/e.zoom;t[0].object.visible=!0;let r,a;for(r=1,a=t.length;r<a;r++){let s=t[r].distance;if(t[r].object.visible&&(s-=s*t[r].hysteresis),i>=s)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<a;r++)t[r].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let i=this.levels;for(let r=0,a=i.length;r<a;r++){let s=i[r];t.object.levels.push({object:s.object.uuid,distance:s.distance,hysteresis:s.hysteresis})}return t}},eh=new w,th=new $e,ih=new $e,xf=new w,rh=new Ne,us=new w,Fn=new Gt,ah=new Ne,Bn=new hr,sh=class extends vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Oo,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,us),this.boundingBox.expandByPoint(us)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,us),this.boundingSphere.expandByPoint(us)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fn.copy(this.boundingSphere),Fn.applyMatrix4(r),e.ray.intersectsSphere(Fn)!==!1&&(ah.copy(r).invert(),Bn.copy(e.ray).applyMatrix4(ah),(this.boundingBox===null||Bn.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Bn)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $e,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let a=1/e.manhattanLength();a===1/0?e.set(1,0,0,0):e.multiplyScalar(a),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;th.fromBufferAttribute(r.attributes.skinIndex,e),ih.fromBufferAttribute(r.attributes.skinWeight,e),eh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){let s=ih.getComponent(a);if(s!==0){let n=th.getComponent(a);rh.multiplyMatrices(i.bones[n].matrixWorld,i.boneInverses[n]),t.addScaledVector(xf.copy(eh).applyMatrix4(rh),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},zn=class extends Ke{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hi=class extends ft{constructor(e=null,t=1,i=1,r,a,s,n,o,l=Et,h=Et,c,u){super(null,s,n,o,l,h,r,a,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nh=new Ne,Mf=new Ne,oh=class Xc{constructor(t=[],i=[]){this.uuid=Nt(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){let t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){let r=new Ne;this.bones[t]&&r.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&r.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){let t=this.bones,i=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let s=0,n=t.length;s<n;s++){let o=t[s]?t[s].matrixWorld:Mf;nh.multiplyMatrices(o,i[s]),nh.toArray(r,s*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Xc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=qo(t),t=Math.max(t,4);let i=new Float32Array(t*t*4);i.set(this.boneMatrices);let r=new Hi(i,t,t,Ri,Sa);return r.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=r,this.boneTextureSize=t,this}getBoneByName(t){for(let i=0,r=this.bones.length;i<r;i++){let a=this.bones[i];if(a.name===t)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let r=0,a=t.bones.length;r<a;r++){let s=t.bones[r],n=i[s];n===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),n=new zn),this.bones.push(n),this.boneInverses.push(new Ne().fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let i=this.bones,r=this.boneInverses;for(let a=0,s=i.length;a<s;a++){let n=i[a];t.bones.push(n.uuid);let o=r[a];t.boneInverses.push(o.toArray())}return t}},ki=class extends Qe{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Lr=new Ne,lh=new Ne,ds=[],hh=new Qt,Sf=new Ne,na=new vt,oa=new Gt,Hn=class extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ki(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Sf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lr),hh.copy(e.boundingBox).applyMatrix4(Lr),this.boundingBox.union(hh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lr),oa.copy(e.boundingSphere).applyMatrix4(Lr),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(na.geometry=this.geometry,na.material=this.material,na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(i),e.ray.intersectsSphere(oa)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Lr),lh.multiplyMatrices(i,Lr),na.matrixWorld=lh,na.raycast(e,ds);for(let s=0,n=ds.length;s<n;s++){let o=ds[s];o.instanceId=a,o.object=this,t.push(o)}ds.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ki(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Ct=class extends xt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ch=new w,uh=new w,dh=new Ne,kn=new hr,ps=new Gt,pi=class extends Ke{constructor(e=new ke,t=new Ct){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)ch.fromBufferAttribute(t,r-1),uh.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ch.distanceTo(uh);e.setAttribute("lineDistance",new ge(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(r),ps.radius+=a,e.ray.intersectsSphere(ps)===!1)return;dh.copy(r).invert(),kn.copy(e.ray).applyMatrix4(dh);let n=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=n*n,l=new w,h=new w,c=new w,u=new w,d=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){let v=Math.max(0,s.start),f=Math.min(p.count,s.start+s.count);for(let m=v,y=f-1;m<y;m+=d){let _=p.getX(m),x=p.getX(m+1);if(l.fromBufferAttribute(g,_),h.fromBufferAttribute(g,x),kn.distanceSqToSegment(l,h,u,c)>o)continue;u.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(u);T<e.near||T>e.far||t.push({distance:T,point:c.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{let v=Math.max(0,s.start),f=Math.min(g.count,s.start+s.count);for(let m=v,y=f-1;m<y;m+=d){if(l.fromBufferAttribute(g,m),h.fromBufferAttribute(g,m+1),kn.distanceSqToSegment(l,h,u,c)>o)continue;u.applyMatrix4(this.matrixWorld);let _=e.ray.origin.distanceTo(u);_<e.near||_>e.far||t.push({distance:_,point:c.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}},ph=new w,mh=new w,ei=class extends pi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)ph.fromBufferAttribute(t,r),mh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ph.distanceTo(mh);e.setAttribute("lineDistance",new ge(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fh=class extends pi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Gn=class extends xt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gh=new Ne,Vn=new hr,ms=new Gt,fs=new w,Wn=class extends Ke{constructor(e=new ke,t=new Gn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere),ms.applyMatrix4(r),ms.radius+=a,e.ray.intersectsSphere(ms)===!1)return;gh.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(gh);let n=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=n*n,l=i.index,h=i.attributes.position;if(l!==null){let c=Math.max(0,s.start),u=Math.min(l.count,s.start+s.count);for(let d=c,p=u;d<p;d++){let g=l.getX(d);fs.fromBufferAttribute(h,g),vh(fs,g,o,r,e,t,this)}}else{let c=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let d=c,p=u;d<p;d++)fs.fromBufferAttribute(h,d),vh(fs,d,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};function vh(e,t,i,r,a,s,n){let o=Vn.distanceSqToPoint(e);if(o<i){let l=new w;Vn.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:n})}}var bf=class extends ft{constructor(e,t,i,r,a,s,n,o,l){super(e,t,i,r,a,s,n,o,l),this.isVideoTexture=!0,this.minFilter=s===void 0?mt:s,this.magFilter=a===void 0?mt:a,this.generateMipmaps=!1;let h=this;function c(){h.needsUpdate=!0,e.requestVideoFrameCallback(c)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(c)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},Tf=class extends ft{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Et,this.minFilter=Et,this.generateMipmaps=!1,this.needsUpdate=!0}},gs=class extends ft{constructor(e,t,i,r,a,s,n,o,l,h,c,u){super(null,s,n,o,l,h,r,a,c,u),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Ef=class extends gs{constructor(e,t,i,r,a,s){super(e,t,i,a,s),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=Ht}},wf=class extends gs{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,301),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},_h=class extends ft{constructor(e,t,i,r,a,s,n,o,l){super(e,t,i,r,a,s,n,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,a=i.length,s;s=t||e*i[a-1];let n=0,o=a-1,l;for(;n<=o;)if(r=Math.floor(n+(o-n)/2),l=i[r]-s,l<0)n=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===s)return r/(a-1);let h=i[r],c=i[r+1]-h,u=(s-h)/c;return(r+u)/(a-1)}getTangent(e,t){let i=1e-4,r=e-i,a=e+i;r<0&&(r=0),a>1&&(a=1);let s=this.getPoint(r),n=this.getPoint(a),o=t||(s.isVector2?new Z:new w);return o.copy(n).sub(s).normalize(),o}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new w,r=[],a=[],s=[],n=new w,o=new Ne;for(let d=0;d<=e;d++){let p=d/e;r[d]=this.getTangentAt(p,new w)}a[0]=new w,s[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),u<=l&&i.set(0,0,1),n.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],n),s[0].crossVectors(r[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),s[d]=s[d-1].clone(),n.crossVectors(r[d-1],r[d]),n.length()>2**-52){n.normalize();let p=Math.acos(at(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(n,p))}s[d].crossVectors(r[d],a[d])}if(t===!0){let d=Math.acos(at(a[0].dot(a[e]),-1,1));d/=e,r[0].dot(n.crossVectors(a[0],a[e]))>0&&(d=-d);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],d*p)),s[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vs=class extends Zt{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,n=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=n,this.aRotation=o}getPoint(e,t){let i=t||new Z,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<2**-52;for(;a<0;)a+=r;for(;a>r;)a-=r;a<2**-52&&(a=s?0:r),this.aClockwise===!0&&!s&&(a===r?a=-r:a-=r);let n=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(n),l=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yh=class extends vs{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Xn(){let e=0,t=0,i=0,r=0;function a(s,n,o,l){e=s,t=o,i=-3*s+3*n-2*o-l,r=2*s-2*n+o+l}return{initCatmullRom:function(s,n,o,l,h){a(n,o,h*(o-s),h*(l-n))},initNonuniformCatmullRom:function(s,n,o,l,h,c,u){let d=(n-s)/h-(o-s)/(h+c)+(o-n)/c,p=(o-n)/c-(l-n)/(c+u)+(l-o)/u;d*=c,p*=c,a(n,o,d,p)},calc:function(s){let n=s*s,o=n*s;return e+t*s+i*n+r*o}}}var _s=new w,jn=new Xn,qn=new Xn,Yn=new Xn,Zn=class extends Zt{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new w){let i=t,r=this.points,a=r.length,s=(a-+!this.closed)*e,n=Math.floor(s),o=s-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/a)+1)*a:o===0&&n===a-1&&(n=a-2,o=1);let l,h;this.closed||n>0?l=r[(n-1)%a]:(_s.subVectors(r[0],r[1]).add(r[0]),l=_s);let c=r[n%a],u=r[(n+1)%a];if(this.closed||n+2<a?h=r[(n+2)%a]:(_s.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=_s),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=l.distanceToSquared(c)**+d,g=c.distanceToSquared(u)**+d,v=u.distanceToSquared(h)**+d;g<1e-4&&(g=1),p<1e-4&&(p=g),v<1e-4&&(v=g),jn.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,p,g,v),qn.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,p,g,v),Yn.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,p,g,v)}else this.curveType==="catmullrom"&&(jn.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),qn.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),Yn.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return i.set(jn.calc(o),qn.calc(o),Yn.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new w().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xh(e,t,i,r,a){let s=(r-t)*.5,n=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+s+n)*l+(-3*i+3*r-2*s-n)*o+s*e+i}function Af(e,t){let i=1-e;return i*i*t}function Rf(e,t){return 2*(1-e)*e*t}function Cf(e,t){return e*e*t}function la(e,t,i,r){return Af(e,t)+Rf(e,i)+Cf(e,r)}function Lf(e,t){let i=1-e;return i*i*i*t}function Pf(e,t){let i=1-e;return 3*i*i*e*t}function If(e,t){return 3*(1-e)*e*e*t}function Uf(e,t){return e*e*e*t}function ha(e,t,i,r,a){return Lf(e,t)+Pf(e,i)+If(e,r)+Uf(e,a)}var Jn=class extends Zt{constructor(e=new Z,t=new Z,i=new Z,r=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Z){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(ha(e,r.x,a.x,s.x,n.x),ha(e,r.y,a.y,s.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mh=class extends Zt{constructor(e=new w,t=new w,i=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new w){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(ha(e,r.x,a.x,s.x,n.x),ha(e,r.y,a.y,s.y,n.y),ha(e,r.z,a.z,s.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kn=class extends Zt{constructor(e=new Z,t=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sh=class extends Zt{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$n=class extends Zt{constructor(e=new Z,t=new Z,i=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Z){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(la(e,r.x,a.x,s.x),la(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qn=class extends Zt{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(la(e,r.x,a.x,s.x),la(e,r.y,a.y,s.y),la(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends Zt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){let i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),n=a-s,o=r[s===0?s:s-1],l=r[s],h=r[s>r.length-2?r.length-1:s+1],c=r[s>r.length-3?r.length-1:s+2];return i.set(xh(n,o.x,l.x,h.x,c.x),xh(n,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Z().fromArray(r))}return this}},ys=Object.freeze({__proto__:null,ArcCurve:yh,CatmullRomCurve3:Zn,CubicBezierCurve:Jn,CubicBezierCurve3:Mh,EllipseCurve:vs,LineCurve:Kn,LineCurve3:Sh,QuadraticBezierCurve:$n,QuadraticBezierCurve3:Qn,SplineCurve:eo}),bh=class extends Zt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ys[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let s=r[a]-i,n=this.curves[a],o=n.getLength(),l=o===0?0:1-s/o;return n.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],n=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(n);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new ys[r.type]().fromJSON(r))}return this}},Pr=class extends bh{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Kn(this.currentPoint.clone(),new Z(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new $n(this.currentPoint.clone(),new Z(e,t),new Z(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){let n=new Jn(this.currentPoint.clone(),new Z(e,t),new Z(i,r),new Z(a,s));return this.curves.push(n),this.currentPoint.set(a,s),this}splineThru(e){let t=new eo([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){let n=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+n,t+o,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,n,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,s,n,o),this}absellipse(e,t,i,r,a,s,n,o){let l=new vs(e,t,i,r,a,s,n,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xs=class jc extends ke{constructor(t=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=at(a,0,Math.PI*2);let s=[],n=[],o=[],l=[],h=[],c=1/i,u=new w,d=new Z,p=new w,g=new w,v=new w,f=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:f=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-f,p.z=m*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:f=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let y=0;y<=i;y++){let _=r+y*c*a,x=Math.sin(_),T=Math.cos(_);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*x,u.y=t[E].y,u.z=t[E].x*T,n.push(u.x,u.y,u.z),d.x=y/i,d.y=E/(t.length-1),o.push(d.x,d.y);let L=l[3*E+0]*x,D=l[3*E+1],M=l[3*E+0]*T;h.push(L,D,M)}}for(let y=0;y<i;y++)for(let _=0;_<t.length-1;_++){let x=_+y*t.length,T=x,E=x+t.length,L=x+t.length+1,D=x+1;s.push(T,E,D),s.push(L,D,E)}this.setIndex(s),this.setAttribute("position",new ge(n,3)),this.setAttribute("uv",new ge(o,2)),this.setAttribute("normal",new ge(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jc(t.points,t.segments,t.phiStart,t.phiLength)}},Th=class qc extends xs{constructor(t=1,i=1,r=4,a=8){let s=new Pr;s.absarc(0,-i/2,t,Math.PI*1.5,0),s.absarc(0,i/2,t,0,Math.PI*.5),super(s.getPoints(r),a),this.type="CapsuleGeometry",this.parameters={radius:t,length:i,capSegments:r,radialSegments:a}}static fromJSON(t){return new qc(t.radius,t.length,t.capSegments,t.radialSegments)}},Eh=class Yc extends ke{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let s=[],n=[],o=[],l=[],h=new w,c=new Z;n.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=i;u++,d+=3){let p=r+u/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),n.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(n[d]/t+1)/2,c.y=(n[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=i;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ge(n,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ca=class Zc extends ke{constructor(t=1,i=1,r=1,a=32,s=1,n=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:s,openEnded:n,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),s=Math.floor(s);let c=[],u=[],d=[],p=[],g=0,v=[],f=r/2,m=0;y(),n===!1&&(t>0&&_(!0),i>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(p,2));function y(){let x=new w,T=new w,E=0,L=(i-t)/r;for(let D=0;D<=s;D++){let M=[],R=D/s,O=R*(i-t)+t;for(let W=0;W<=a;W++){let J=W/a,P=J*l+o,H=Math.sin(P),X=Math.cos(P);T.x=O*H,T.y=-R*r+f,T.z=O*X,u.push(T.x,T.y,T.z),x.set(H,L,X).normalize(),d.push(x.x,x.y,x.z),p.push(J,1-R),M.push(g++)}v.push(M)}for(let D=0;D<a;D++)for(let M=0;M<s;M++){let R=v[M][D],O=v[M+1][D],W=v[M+1][D+1],J=v[M][D+1];c.push(R,O,J),c.push(O,W,J),E+=6}h.addGroup(m,E,0),m+=E}function _(x){let T=g,E=new Z,L=new w,D=0,M=x===!0?t:i,R=x===!0?1:-1;for(let W=1;W<=a;W++)u.push(0,f*R,0),d.push(0,R,0),p.push(.5,.5),g++;let O=g;for(let W=0;W<=a;W++){let J=W/a*l+o,P=Math.cos(J),H=Math.sin(J);L.x=M*H,L.y=f*R,L.z=M*P,u.push(L.x,L.y,L.z),d.push(0,R,0),E.x=P*.5+.5,E.y=H*.5*R+.5,p.push(E.x,E.y),g++}for(let W=0;W<a;W++){let J=T+W,P=O+W;x===!0?c.push(P,P+1,J):c.push(P+1,P,J),D+=3}h.addGroup(m,D,x===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},to=class Jc extends ca{constructor(t=1,i=1,r=32,a=1,s=!1,n=0,o=Math.PI*2){super(0,t,i,r,a,s,n,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:n,thetaLength:o}}static fromJSON(t){return new Jc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ir=class Kc extends ke{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let s=[],n=[];o(a),h(r),c(),this.setAttribute("position",new ge(s,3)),this.setAttribute("normal",new ge(s.slice(),3)),this.setAttribute("uv",new ge(n,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new w,x=new w,T=new w;for(let E=0;E<i.length;E+=3)p(i[E+0],_),p(i[E+1],x),p(i[E+2],T),l(_,x,T,y)}function l(y,_,x,T){let E=T+1,L=[];for(let D=0;D<=E;D++){L[D]=[];let M=y.clone().lerp(x,D/E),R=_.clone().lerp(x,D/E),O=E-D;for(let W=0;W<=O;W++)W===0&&D===E?L[D][W]=M:L[D][W]=M.clone().lerp(R,W/O)}for(let D=0;D<E;D++)for(let M=0;M<2*(E-D)-1;M++){let R=Math.floor(M/2);M%2==0?(d(L[D][R+1]),d(L[D+1][R]),d(L[D][R])):(d(L[D][R+1]),d(L[D+1][R+1]),d(L[D+1][R]))}}function h(y){let _=new w;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(y),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function c(){let y=new w;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];let x=f(y)/2/Math.PI+.5,T=m(y)/Math.PI+.5;n.push(x,1-T)}g(),u()}function u(){for(let y=0;y<n.length;y+=6){let _=n[y+0],x=n[y+2],T=n[y+4];Math.max(_,x,T)>.9&&Math.min(_,x,T)<.1&&(_<.2&&(n[y+0]+=1),x<.2&&(n[y+2]+=1),T<.2&&(n[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function p(y,_){let x=y*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function g(){let y=new w,_=new w,x=new w,T=new w,E=new Z,L=new Z,D=new Z;for(let M=0,R=0;M<s.length;M+=9,R+=6){y.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),E.set(n[R+0],n[R+1]),L.set(n[R+2],n[R+3]),D.set(n[R+4],n[R+5]),T.copy(y).add(_).add(x).divideScalar(3);let O=f(T);v(E,R+0,y,O),v(L,R+2,_,O),v(D,R+4,x,O)}}function v(y,_,x,T){T<0&&y.x===1&&(n[_]=y.x-1),x.x===0&&x.z===0&&(n[_]=T/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.vertices,t.indices,t.radius,t.details)}},wh=class $c extends Ir{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a];super(s,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new $c(t.radius,t.detail)}},Ms=new w,Ss=new w,io=new w,bs=new Ni,Ah=class extends ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=1e4,r=Math.cos(Pi*t),a=e.getIndex(),s=e.getAttribute("position"),n=a?a.count:s.count,o=[0,0,0],l=["a","b","c"],h=[,,,],c={},u=[];for(let d=0;d<n;d+=3){a?(o[0]=a.getX(d),o[1]=a.getX(d+1),o[2]=a.getX(d+2)):(o[0]=d,o[1]=d+1,o[2]=d+2);let{a:p,b:g,c:v}=bs;if(p.fromBufferAttribute(s,o[0]),g.fromBufferAttribute(s,o[1]),v.fromBufferAttribute(s,o[2]),bs.getNormal(io),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[0]!==h[1]&&h[1]!==h[2]&&h[2]!==h[0])for(let f=0;f<3;f++){let m=(f+1)%3,y=h[f],_=h[m],x=bs[l[f]],T=bs[l[m]],E=`${y}_${_}`,L=`${_}_${y}`;L in c&&c[L]?(io.dot(c[L].normal)<=r&&(u.push(x.x,x.y,x.z),u.push(T.x,T.y,T.z)),c[L]=null):E in c||(c[E]={index0:o[f],index1:o[m],normal:io.clone()})}}for(let d in c)if(c[d]){let{index0:p,index1:g}=c[d];Ms.fromBufferAttribute(s,p),Ss.fromBufferAttribute(s,g),u.push(Ms.x,Ms.y,Ms.z),u.push(Ss.x,Ss.y,Ss.z)}this.setAttribute("position",new ge(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Mi=class extends Pr{constructor(e){super(e),this.uuid=Nt(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Pr().fromJSON(r))}return this}},Df={triangulate:function(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,s=Rh(e,0,a,i,!0),n=[];if(!s||s.next===s.prev)return n;let o,l,h,c,u,d,p;if(r&&(s=zf(e,t,s,i)),e.length>80*i){o=h=e[0],l=c=e[1];for(let g=i;g<a;g+=i)u=e[g],d=e[g+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p===0?0:32767/p}return ua(s,n,i,o,l,p,0),n}};function Rh(e,t,i,r,a){let s,n;if(a===Jf(e,t,i,r)>0)for(s=t;s<i;s+=r)n=Ph(s,e[s],e[s+1],n);else for(s=i-r;s>=t;s-=r)n=Ph(s,e[s],e[s+1],n);return n&&Ts(n,n.next)&&(pa(n),n=n.next),n}function Gi(e,t){if(!e)return e;t||=e;let i=e,r;do if(r=!1,!i.steiner&&(Ts(i,i.next)||rt(i.prev,i,i.next)===0)){if(pa(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function ua(e,t,i,r,a,s,n){if(!e)return;!n&&s&&Wf(e,r,a,s);let o=e,l,h;for(;e.prev!==e.next;)if(l=e.prev,h=e.next,s?Of(e,r,a,s):Nf(e))t.push(l.i/i|0),t.push(e.i/i|0),t.push(h.i/i|0),pa(e),e=h.next,o=h.next;else if(e=h,e===o){n?n===1?(e=Ff(Gi(e),t,i),ua(e,t,i,r,a,s,2)):n===2&&Bf(e,t,i,r,a,s):ua(Gi(e),t,i,r,a,s,1);break}}function Nf(e){let t=e.prev,i=e,r=e.next;if(rt(t,i,r)>=0)return!1;let a=t.x,s=i.x,n=r.x,o=t.y,l=i.y,h=r.y,c=a<s?a<n?a:n:s<n?s:n,u=o<l?o<h?o:h:l<h?l:h,d=a>s?a>n?a:n:s>n?s:n,p=o>l?o>h?o:h:l>h?l:h,g=r.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=p&&Ur(a,o,s,l,n,h,g.x,g.y)&&rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Of(e,t,i,r){let a=e.prev,s=e,n=e.next;if(rt(a,s,n)>=0)return!1;let o=a.x,l=s.x,h=n.x,c=a.y,u=s.y,d=n.y,p=o<l?o<h?o:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,v=o>l?o>h?o:h:l>h?l:h,f=c>u?c>d?c:d:u>d?u:d,m=ro(p,g,t,i,r),y=ro(v,f,t,i,r),_=e.prevZ,x=e.nextZ;for(;_&&_.z>=m&&x&&x.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=f&&_!==a&&_!==n&&Ur(o,c,l,u,h,d,_.x,_.y)&&rt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=p&&x.x<=v&&x.y>=g&&x.y<=f&&x!==a&&x!==n&&Ur(o,c,l,u,h,d,x.x,x.y)&&rt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=m;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=f&&_!==a&&_!==n&&Ur(o,c,l,u,h,d,_.x,_.y)&&rt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=f&&x!==a&&x!==n&&Ur(o,c,l,u,h,d,x.x,x.y)&&rt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ff(e,t,i){let r=e;do{let a=r.prev,s=r.next.next;!Ts(a,s)&&Ch(a,r,r.next,s)&&da(a,s)&&da(s,a)&&(t.push(a.i/i|0),t.push(r.i/i|0),t.push(s.i/i|0),pa(r),pa(r.next),r=e=s),r=r.next}while(r!==e);return Gi(r)}function Bf(e,t,i,r,a,s){let n=e;do{let o=n.next.next;for(;o!==n.prev;){if(n.i!==o.i&&qf(n,o)){let l=Lh(n,o);n=Gi(n,n.next),l=Gi(l,l.next),ua(n,t,i,r,a,s,0),ua(l,t,i,r,a,s,0);return}o=o.next}n=n.next}while(n!==e)}function zf(e,t,i,r){let a=[],s,n,o,l,h;for(s=0,n=t.length;s<n;s++)o=t[s]*r,l=s<n-1?t[s+1]*r:e.length,h=Rh(e,o,l,r,!1),h===h.next&&(h.steiner=!0),a.push(jf(h));for(a.sort(Hf),s=0;s<a.length;s++)i=kf(a[s],i);return i}function Hf(e,t){return e.x-t.x}function kf(e,t){let i=Gf(e,t);if(!i)return t;let r=Lh(i,e);return Gi(r,r.next),Gi(i,i.next)}function Gf(e,t){let i=t,r=-1/0,a,s=e.x,n=e.y;do{if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let d=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=s&&d>r&&(r=d,a=i.x<i.next.x?i:i.next,d===s))return a}i=i.next}while(i!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;i=a;do s>=i.x&&i.x>=l&&s!==i.x&&Ur(n<h?s:r,n,l,h,n<h?r:s,n,i.x,i.y)&&(u=Math.abs(n-i.y)/(s-i.x),da(i,e)&&(u<c||u===c&&(i.x>a.x||i.x===a.x&&Vf(a,i)))&&(a=i,c=u)),i=i.next;while(i!==o);return a}function Vf(e,t){return rt(e.prev,e,t.prev)<0&&rt(t.next,e,e.next)<0}function Wf(e,t,i,r){let a=e;do a.z===0&&(a.z=ro(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,Xf(a)}function Xf(e){let t,i,r,a,s,n,o,l,h=1;do{for(i=e,e=null,s=null,n=0;i;){for(n++,r=i,o=0,t=0;t<h&&(o++,r=r.nextZ,r);t++);for(l=h;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),s?s.nextZ=a:e=a,a.prevZ=s,s=a;i=r}s.nextZ=null,h*=2}while(n>1);return e}function ro(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function jf(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Ur(e,t,i,r,a,s,n,o){return(a-n)*(t-o)>=(e-n)*(s-o)&&(e-n)*(r-o)>=(i-n)*(t-o)&&(i-n)*(s-o)>=(a-n)*(r-o)}function qf(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Yf(e,t)&&(da(e,t)&&da(t,e)&&Zf(e,t)&&(rt(e.prev,e,t.prev)||rt(e,t.prev,t))||Ts(e,t)&&rt(e.prev,e,e.next)>0&&rt(t.prev,t,t.next)>0)}function rt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Ts(e,t){return e.x===t.x&&e.y===t.y}function Ch(e,t,i,r){let a=ws(rt(e,t,i)),s=ws(rt(e,t,r)),n=ws(rt(i,r,e)),o=ws(rt(i,r,t));return!!(a!==s&&n!==o||a===0&&Es(e,i,t)||s===0&&Es(e,r,t)||n===0&&Es(i,e,r)||o===0&&Es(i,t,r))}function Es(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function ws(e){return e>0?1:e<0?-1:0}function Yf(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Ch(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function da(e,t){return rt(e.prev,e,e.next)<0?rt(e,t,e.next)>=0&&rt(e,e.prev,t)>=0:rt(e,t,e.prev)<0||rt(e,e.next,t)<0}function Zf(e,t){let i=e,r=!1,a=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&a<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Lh(e,t){let i=new ao(e.i,e.x,e.y),r=new ao(t.i,t.x,t.y),a=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function Ph(e,t,i,r){let a=new ao(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function pa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ao(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Jf(e,t,i,r){let a=0;for(let s=t,n=i-r;s<i;s+=r)a+=(e[n]-e[s])*(e[s+1]+e[n+1]),n=s;return a}var Si=class Qc{static area(t){let i=t.length,r=0;for(let a=i-1,s=0;s<i;a=s++)r+=t[a].x*t[s].y-t[s].x*t[a].y;return r*.5}static isClockWise(t){return Qc.area(t)<0}static triangulateShape(t,i){let r=[],a=[],s=[];Ih(t),Uh(r,t);let n=t.length;i.forEach(Ih);for(let l=0;l<i.length;l++)a.push(n),n+=i[l].length,Uh(r,i[l]);let o=Df.triangulate(r,a);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Ih(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Uh(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var so=class eu extends ke{constructor(t=new Mi([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],s=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];n(h)}this.setAttribute("position",new ge(a,3)),this.setAttribute("uv",new ge(s,2)),this.computeVertexNormals();function n(o){let l=[],h=i.curveSegments===void 0?12:i.curveSegments,c=i.steps===void 0?1:i.steps,u=i.depth===void 0?1:i.depth,d=i.bevelEnabled===void 0||i.bevelEnabled,p=i.bevelThickness===void 0?.2:i.bevelThickness,g=i.bevelSize===void 0?p-.1:i.bevelSize,v=i.bevelOffset===void 0?0:i.bevelOffset,f=i.bevelSegments===void 0?3:i.bevelSegments,m=i.extrudePath,y=i.UVGenerator===void 0?Kf:i.UVGenerator,_,x=!1,T,E,L,D;m&&(_=m.getSpacedPoints(c),x=!0,d=!1,T=m.computeFrenetFrames(c,!1),E=new w,L=new w,D=new w),d||(f=0,p=0,g=0,v=0);let M=o.extractPoints(h),R=M.shape,O=M.holes;if(!Si.isClockWise(R)){R=R.reverse();for(let C=0,oe=O.length;C<oe;C++){let $=O[C];Si.isClockWise($)&&(O[C]=$.reverse())}}let W=Si.triangulateShape(R,O),J=R;for(let C=0,oe=O.length;C<oe;C++){let $=O[C];R=R.concat($)}function P(C,oe,$){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(oe,$)}let H=R.length,X=W.length;function q(C,oe,$){let K,Y,Me,fe=C.x-oe.x,ye=C.y-oe.y,Ge=$.x-C.x,Le=$.y-C.y,nt=fe*fe+ye*ye,Lt=fe*Le-ye*Ge;if(Math.abs(Lt)>2**-52){let A=Math.sqrt(nt),S=Math.sqrt(Ge*Ge+Le*Le),B=oe.x-ye/A,re=oe.y+fe/A,te=$.x-Le/S,ee=$.y+Ge/S,ve=((te-B)*Le-(ee-re)*Ge)/(fe*Le-ye*Ge);K=B+fe*ve-C.x,Y=re+ye*ve-C.y;let ne=K*K+Y*Y;if(ne<=2)return new Z(K,Y);Me=Math.sqrt(ne/2)}else{let A=!1;fe>2**-52?Ge>2**-52&&(A=!0):fe<-(2**-52)?Ge<-(2**-52)&&(A=!0):Math.sign(ye)===Math.sign(Le)&&(A=!0),A?(K=-ye,Y=fe,Me=Math.sqrt(nt)):(K=fe,Y=ye,Me=Math.sqrt(nt/2))}return new Z(K/Me,Y/Me)}let ae=[];for(let C=0,oe=J.length,$=oe-1,K=C+1;C<oe;C++,$++,K++)$===oe&&($=0),K===oe&&(K=0),ae[C]=q(J[C],J[$],J[K]);let j=[],U,F=ae.concat();for(let C=0,oe=O.length;C<oe;C++){let $=O[C];U=[];for(let K=0,Y=$.length,Me=Y-1,fe=K+1;K<Y;K++,Me++,fe++)Me===Y&&(Me=0),fe===Y&&(fe=0),U[K]=q($[K],$[Me],$[fe]);j.push(U),F=F.concat(U)}for(let C=0;C<f;C++){let oe=C/f,$=p*Math.cos(oe*Math.PI/2),K=g*Math.sin(oe*Math.PI/2)+v;for(let Y=0,Me=J.length;Y<Me;Y++){let fe=P(J[Y],ae[Y],K);Oe(fe.x,fe.y,-$)}for(let Y=0,Me=O.length;Y<Me;Y++){let fe=O[Y];U=j[Y];for(let ye=0,Ge=fe.length;ye<Ge;ye++){let Le=P(fe[ye],U[ye],K);Oe(Le.x,Le.y,-$)}}}let Q=g+v;for(let C=0;C<H;C++){let oe=d?P(R[C],F[C],Q):R[C];x?(L.copy(T.normals[0]).multiplyScalar(oe.x),E.copy(T.binormals[0]).multiplyScalar(oe.y),D.copy(_[0]).add(L).add(E),Oe(D.x,D.y,D.z)):Oe(oe.x,oe.y,0)}for(let C=1;C<=c;C++)for(let oe=0;oe<H;oe++){let $=d?P(R[oe],F[oe],Q):R[oe];x?(L.copy(T.normals[C]).multiplyScalar($.x),E.copy(T.binormals[C]).multiplyScalar($.y),D.copy(_[C]).add(L).add(E),Oe(D.x,D.y,D.z)):Oe($.x,$.y,u/c*C)}for(let C=f-1;C>=0;C--){let oe=C/f,$=p*Math.cos(oe*Math.PI/2),K=g*Math.sin(oe*Math.PI/2)+v;for(let Y=0,Me=J.length;Y<Me;Y++){let fe=P(J[Y],ae[Y],K);Oe(fe.x,fe.y,u+$)}for(let Y=0,Me=O.length;Y<Me;Y++){let fe=O[Y];U=j[Y];for(let ye=0,Ge=fe.length;ye<Ge;ye++){let Le=P(fe[ye],U[ye],K);x?Oe(Le.x,Le.y+_[c-1].y,_[c-1].x+$):Oe(Le.x,Le.y,u+$)}}}ue(),me();function ue(){let C=a.length/3;if(d){let oe=0,$=H*oe;for(let K=0;K<X;K++){let Y=W[K];we(Y[2]+$,Y[1]+$,Y[0]+$)}oe=c+f*2,$=H*oe;for(let K=0;K<X;K++){let Y=W[K];we(Y[0]+$,Y[1]+$,Y[2]+$)}}else{for(let oe=0;oe<X;oe++){let $=W[oe];we($[2],$[1],$[0])}for(let oe=0;oe<X;oe++){let $=W[oe];we($[0]+H*c,$[1]+H*c,$[2]+H*c)}}r.addGroup(C,a.length/3-C,0)}function me(){let C=a.length/3,oe=0;Te(J,oe),oe+=J.length;for(let $=0,K=O.length;$<K;$++){let Y=O[$];Te(Y,oe),oe+=Y.length}r.addGroup(C,a.length/3-C,1)}function Te(C,oe){let $=C.length;for(;--$>=0;){let K=$,Y=$-1;Y<0&&(Y=C.length-1);for(let Me=0,fe=c+f*2;Me<fe;Me++){let ye=H*Me,Ge=H*(Me+1);je(oe+K+ye,oe+Y+ye,oe+Y+Ge,oe+K+Ge)}}}function Oe(C,oe,$){l.push(C),l.push(oe),l.push($)}function we(C,oe,$){Ue(C),Ue(oe),Ue($);let K=a.length/3,Y=y.generateTopUV(r,a,K-3,K-2,K-1);qe(Y[0]),qe(Y[1]),qe(Y[2])}function je(C,oe,$,K){Ue(C),Ue(oe),Ue(K),Ue(oe),Ue($),Ue(K);let Y=a.length/3,Me=y.generateSideWallUV(r,a,Y-6,Y-3,Y-2,Y-1);qe(Me[0]),qe(Me[1]),qe(Me[3]),qe(Me[1]),qe(Me[2]),qe(Me[3])}function Ue(C){a.push(l[C*3+0]),a.push(l[C*3+1]),a.push(l[C*3+2])}function qe(C){s.push(C.x),s.push(C.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return $f(i,r,t)}static fromJSON(t,i){let r=[];for(let s=0,n=t.shapes.length;s<n;s++){let o=i[t.shapes[s]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new ys[a.type]().fromJSON(a)),new eu(r,t.options)}},Kf={generateTopUV:function(e,t,i,r,a){let s=t[i*3],n=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new Z(s,n),new Z(o,l),new Z(h,c)]},generateSideWallUV:function(e,t,i,r,a,s){let n=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],u=t[r*3+2],d=t[a*3],p=t[a*3+1],g=t[a*3+2],v=t[s*3],f=t[s*3+1],m=t[s*3+2];return Math.abs(o-c)<Math.abs(n-h)?[new Z(n,1-l),new Z(h,1-u),new Z(d,1-g),new Z(v,1-m)]:[new Z(o,1-l),new Z(c,1-u),new Z(p,1-g),new Z(f,1-m)]}};function $f(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let s=e[r];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Dh=class tu extends Ir{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1];super(a,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new tu(t.radius,t.detail)}},no=class iu extends Ir{constructor(t=1,i=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new iu(t.radius,t.detail)}},Nh=class ru extends ke{constructor(t=.5,i=1,r=32,a=1,s=0,n=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:s,thetaLength:n},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],c=[],u=t,d=(i-t)/a,p=new w,g=new Z;for(let v=0;v<=a;v++){for(let f=0;f<=r;f++){let m=s+f/r*n;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/i+1)/2,g.y=(p.y/i+1)/2,c.push(g.x,g.y)}u+=d}for(let v=0;v<a;v++){let f=v*(r+1);for(let m=0;m<r;m++){let y=m+f,_=y,x=y+r+1,T=y+r+2,E=y+1;o.push(_,x,E),o.push(x,T,E)}}this.setIndex(o),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},oo=class au extends ke{constructor(t=new Mi([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],s=[],n=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(s,3)),this.setAttribute("uv",new ge(n,2));function h(c){let u=a.length/3,d=c.extractPoints(i),p=d.shape,g=d.holes;Si.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=g.length;f<m;f++){let y=g[f];Si.isClockWise(y)===!0&&(g[f]=y.reverse())}let v=Si.triangulateShape(p,g);for(let f=0,m=g.length;f<m;f++){let y=g[f];p=p.concat(y)}for(let f=0,m=p.length;f<m;f++){let y=p[f];a.push(y.x,y.y,0),s.push(0,0,1),n.push(y.x,y.y)}for(let f=0,m=v.length;f<m;f++){let y=v[f],_=y[0]+u,x=y[1]+u,T=y[2]+u;r.push(_,x,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return Qf(i,t)}static fromJSON(t,i){let r=[];for(let a=0,s=t.shapes.length;a<s;a++){let n=i[t.shapes[a]];r.push(n)}return new au(r,t.curveSegments)}};function Qf(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var As=class su extends ke{constructor(t=1,i=32,r=16,a=0,s=Math.PI*2,n=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:s,thetaStart:n,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(n+o,Math.PI),h=0,c=[],u=new w,d=new w,p=[],g=[],v=[],f=[];for(let m=0;m<=r;m++){let y=[],_=m/r,x=0;m===0&&n===0?x=.5/i:m===r&&l===Math.PI&&(x=-.5/i);for(let T=0;T<=i;T++){let E=T/i;u.x=-t*Math.cos(a+E*s)*Math.sin(n+_*o),u.y=t*Math.cos(n+_*o),u.z=t*Math.sin(a+E*s)*Math.sin(n+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(E+x,1-_),y.push(h++)}c.push(y)}for(let m=0;m<r;m++)for(let y=0;y<i;y++){let _=c[m][y+1],x=c[m][y],T=c[m+1][y],E=c[m+1][y+1];(m!==0||n>0)&&p.push(_,x,E),(m!==r-1||l<Math.PI)&&p.push(x,T,E)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(v,3)),this.setAttribute("uv",new ge(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Oh=class nu extends Ir{constructor(t=1,i=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new nu(t.radius,t.detail)}},lo=class ou extends ke{constructor(t=1,i=.4,r=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:s},r=Math.floor(r),a=Math.floor(a);let n=[],o=[],l=[],h=[],c=new w,u=new w,d=new w;for(let p=0;p<=r;p++)for(let g=0;g<=a;g++){let v=g/a*s,f=p/r*Math.PI*2;u.x=(t+i*Math.cos(f))*Math.cos(v),u.y=(t+i*Math.cos(f))*Math.sin(v),u.z=i*Math.sin(f),o.push(u.x,u.y,u.z),c.x=t*Math.cos(v),c.y=t*Math.sin(v),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/a),h.push(p/r)}for(let p=1;p<=r;p++)for(let g=1;g<=a;g++){let v=(a+1)*p+g-1,f=(a+1)*(p-1)+g-1,m=(a+1)*(p-1)+g,y=(a+1)*p+g;n.push(v,f,y),n.push(f,m,y)}this.setIndex(n),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Fh=class lu extends ke{constructor(t=1,i=.4,r=64,a=8,s=2,n=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:s,q:n},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],c=[],u=new w,d=new w,p=new w,g=new w,v=new w,f=new w,m=new w;for(let _=0;_<=r;++_){let x=_/r*s*Math.PI*2;y(x,s,n,t,p),y(x+.01,s,n,t,g),f.subVectors(g,p),m.addVectors(g,p),v.crossVectors(f,m),m.crossVectors(v,f),v.normalize(),m.normalize();for(let T=0;T<=a;++T){let E=T/a*Math.PI*2,L=-i*Math.cos(E),D=i*Math.sin(E);u.x=p.x+(L*m.x+D*v.x),u.y=p.y+(L*m.y+D*v.y),u.z=p.z+(L*m.z+D*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),h.push(d.x,d.y,d.z),c.push(_/r),c.push(T/a)}}for(let _=1;_<=r;_++)for(let x=1;x<=a;x++){let T=(a+1)*(_-1)+(x-1),E=(a+1)*_+(x-1),L=(a+1)*_+x,D=(a+1)*(_-1)+x;o.push(T,E,D),o.push(E,L,D)}this.setIndex(o),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(c,2));function y(_,x,T,E,L){let D=Math.cos(_),M=Math.sin(_),R=T/x*_,O=Math.cos(R);L.x=E*(2+O)*.5*D,L.y=E*(2+O)*M*.5,L.z=E*Math.sin(R)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Bh=class hu extends ke{constructor(t=new Qn(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),i=64,r=1,a=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:s};let n=t.computeFrenetFrames(i,s);this.tangents=n.tangents,this.normals=n.normals,this.binormals=n.binormals;let o=new w,l=new w,h=new Z,c=new w,u=[],d=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(p,2));function v(){for(let _=0;_<i;_++)f(_);f(s===!1?i:0),y(),m()}function f(_){c=t.getPointAt(_/i,c);let x=n.normals[_],T=n.binormals[_];for(let E=0;E<=a;E++){let L=E/a*Math.PI*2,D=Math.sin(L),M=-Math.cos(L);l.x=M*x.x+D*T.x,l.y=M*x.y+D*T.y,l.z=M*x.z+D*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+r*l.x,o.y=c.y+r*l.y,o.z=c.z+r*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=i;_++)for(let x=1;x<=a;x++){let T=(a+1)*(_-1)+(x-1),E=(a+1)*_+(x-1),L=(a+1)*_+x,D=(a+1)*(_-1)+x;g.push(T,E,D),g.push(E,L,D)}}function y(){for(let _=0;_<=i;_++)for(let x=0;x<=a;x++)h.x=_/i,h.y=x/a,p.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new hu(new ys[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},zh=class extends ke{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new w,a=new w;if(e.index!==null){let s=e.attributes.position,n=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:n.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let c=o[l],u=c.start,d=c.count;for(let p=u,g=u+d;p<g;p+=3)for(let v=0;v<3;v++){let f=n.getX(p+v),m=n.getX(p+(v+1)%3);r.fromBufferAttribute(s,f),a.fromBufferAttribute(s,m),Hh(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let s=e.attributes.position;for(let n=0,o=s.count/3;n<o;n++)for(let l=0;l<3;l++){let h=3*n+l,c=3*n+(l+1)%3;r.fromBufferAttribute(s,h),a.fromBufferAttribute(s,c),Hh(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new ge(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Hh(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}var kh=Object.freeze({__proto__:null,BoxGeometry:_r,CapsuleGeometry:Th,CircleGeometry:Eh,ConeGeometry:to,CylinderGeometry:ca,DodecahedronGeometry:wh,EdgesGeometry:Ah,ExtrudeGeometry:so,IcosahedronGeometry:Dh,LatheGeometry:xs,OctahedronGeometry:no,PlaneGeometry:ts,PolyhedronGeometry:Ir,RingGeometry:Nh,ShapeGeometry:oo,SphereGeometry:As,TetrahedronGeometry:Oh,TorusGeometry:lo,TorusKnotGeometry:Fh,TubeGeometry:Bh,WireframeGeometry:zh}),Gh=class extends xt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Vh=class extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ho=class extends xt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wh=class extends ho{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Xh=class extends xt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jh=class extends xt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qh=class extends xt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},co=class extends xt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yh=class extends xt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zh=class extends Ct{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Vi(e,t,i){return!e||!i&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Jh(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Kh(e){function t(a,s){return e[a]-e[s]}let i=e.length,r=Array(i);for(let a=0;a!==i;++a)r[a]=a;return r.sort(t),r}function uo(e,t,i){let r=e.length,a=new e.constructor(r);for(let s=0,n=0;n!==r;++s){let o=i[s]*t;for(let l=0;l!==t;++l)a[n++]=e[o+l]}return a}function po(e,t,i,r){let a=1,s=e[0];for(;s!==void 0&&s[r]===void 0;)s=e[a++];if(s===void 0)return;let n=s[r];if(n!==void 0)if(Array.isArray(n))do n=s[r],n!==void 0&&(t.push(s.time),i.push.apply(i,n)),s=e[a++];while(s!==void 0);else if(n.toArray!==void 0)do n=s[r],n!==void 0&&(t.push(s.time),n.toArray(i,i.length)),s=e[a++];while(s!==void 0);else do n=s[r],n!==void 0&&(t.push(s.time),i.push(n)),s=e[a++];while(s!==void 0)}function eg(e,t,i,r,a=30){let s=e.clone();s.name=t;let n=[];for(let l=0;l<s.tracks.length;++l){let h=s.tracks[l],c=h.getValueSize(),u=[],d=[];for(let p=0;p<h.times.length;++p){let g=h.times[p]*a;if(!(g<i||g>=r)){u.push(h.times[p]);for(let v=0;v<c;++v)d.push(h.values[p*c+v])}}u.length!==0&&(h.times=Vi(u,h.times.constructor),h.values=Vi(d,h.values.constructor),n.push(h))}s.tracks=n;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function tg(e,t=0,i=e,r=30){r<=0&&(r=30);let a=i.tracks.length,s=t/r;for(let n=0;n<a;++n){let o=i.tracks[n],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let h=e.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(h===void 0)continue;let c=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=u/3);let d=0,p=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);let g=o.times.length-1,v;if(s<=o.times[0]){let m=c,y=u-c;v=o.values.slice(m,y)}else if(s>=o.times[g]){let m=g*u+c,y=m+u-c;v=o.values.slice(m,y)}else{let m=o.createInterpolant(),y=c,_=u-c;m.evaluate(s),v=m.resultBuffer.slice(y,_)}l==="quaternion"&&new wt().fromArray(v).normalize().conjugate().toArray(v);let f=h.times.length;for(let m=0;m<f;++m){let y=m*p+d;if(l==="quaternion")wt.multiplyQuaternionsFlat(h.values,y,v,0,h.values,y);else{let _=p-d*2;for(let x=0;x<_;++x)h.values[y+x]-=v[x]}}}return e.blendMode=Xs,e}var ig={convertArray:Vi,isTypedArray:Jh,getKeyframeOrder:Kh,sortedArray:uo,flattenJSON:po,subclip:eg,makeClipAdditive:tg},ma=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(i):r,this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];e:{t:{let s;i:{r:if(!(e<r)){for(let n=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===n)break;if(a=r,r=t[++i],e<r)break t}s=t.length;break i}if(!(e>=a)){let n=t[1];e<n&&(i=2,a=n);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break t}s=i,i=0;break i}break e}for(;i<s;){let n=i+s>>>1;e<t[n]?s=n:i=n+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}},$h=class extends ma{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ci,endingEnd:Ci}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,s=e+1,n=r[a],o=r[s];if(n===void 0)switch(this.getSettings_().endingStart){case Li:a=e,n=2*t-i;break;case kr:a=r.length-2,n=t+r[a]-r[a+1];break;default:a=e,n=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Li:s=e,o=2*i-t;break;case kr:s=1,o=i+r[1]-r[0];break;default:s=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-n),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(r-t),g=p*p,v=g*p,f=-u*v+2*u*g-u*p,m=(1+u)*v+(-1.5-2*u)*g+(-.5+u)*p+1,y=(-1-d)*v+(1.5+d)*g+.5*p,_=d*v-d*g;for(let x=0;x!==n;++x)a[x]=f*s[h+x]+m*s[l+x]+y*s[o+x]+_*s[c+x];return a}},mo=class extends ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=(i-t)/(r-t),c=1-h;for(let u=0;u!==n;++u)a[u]=s[l+u]*c+s[o+u]*h;return a}},Qh=class extends ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Jt=class{constructor(e,t,i,r){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vi(t,this.TimeBufferType),this.values=Vi(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vi(e.times,Array),values:Vi(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $h(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);let n=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*n,s*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let n=0;n!==a;n++){let o=i[n];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,n,o),e=!1;break}if(s!==null&&s>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,n,o,s),e=!1;break}s=o}if(r!==void 0&&Jh(r))for(let n=0,o=r.length;n!==o;++n){let l=r[n];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,n,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ea,a=e.length-1,s=1;for(let n=1;n<a;++n){let o=!1,l=e[n];if(l!==e[n+1]&&(n!==1||l!==e[0]))if(r)o=!0;else{let h=n*i,c=h-i,u=h+i;for(let d=0;d!==i;++d){let p=t[h+d];if(p!==t[c+d]||p!==t[u+d]){o=!0;break}}}if(o){if(n!==s){e[s]=e[n];let h=n*i,c=s*i;for(let u=0;u!==i;++u)t[c+u]=t[h+u]}++s}}if(a>0){e[s]=e[a];for(let n=a*i,o=s*i,l=0;l!==i;++l)t[o+l]=t[n+l];++s}return s===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,s),this.values=t.slice(0,s*i)),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Jt.prototype.TimeBufferType=Float32Array,Jt.prototype.ValueBufferType=Float32Array,Jt.prototype.DefaultInterpolation=Hr;var Wi=class extends Jt{};Wi.prototype.ValueTypeName="bool",Wi.prototype.ValueBufferType=Array,Wi.prototype.DefaultInterpolation=zr,Wi.prototype.InterpolantFactoryMethodLinear=void 0,Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends Jt{};fo.prototype.ValueTypeName="color";var fa=class extends Jt{};fa.prototype.ValueTypeName="number";var ec=class extends ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=(i-t)/(r-t),l=e*n;for(let h=l+n;l!==h;l+=4)wt.slerpFlat(a,0,s,l-n,s,l,o);return a}},Dr=class extends Jt{InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}};Dr.prototype.ValueTypeName="quaternion",Dr.prototype.DefaultInterpolation=Hr,Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Jt{};Xi.prototype.ValueTypeName="string",Xi.prototype.ValueBufferType=Array,Xi.prototype.DefaultInterpolation=zr,Xi.prototype.InterpolantFactoryMethodLinear=void 0,Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Jt{};ga.prototype.ValueTypeName="vector";var va=class{constructor(e,t=-1,i,r=wa){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Nt(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let s=0,n=i.length;s!==n;++s)t.push(ag(i[s]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,s=i.length;a!==s;++a)t.push(Jt.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let a=t.length,s=[];for(let n=0;n<a;n++){let o=[],l=[];o.push((n+a-1)%a,n,(n+1)%a),l.push(0,1,0);let h=Kh(o);o=uo(o,1,h),l=uo(l,1,h),!r&&o[0]===0&&(o.push(a),l.push(l[0])),s.push(new fa(".morphTargetInfluences["+t[n].name+"]",o,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let n=0,o=e.length;n<o;n++){let l=e[n],h=l.name.match(a);if(h&&h.length>1){let c=h[1],u=r[c];u||(r[c]=u=[]),u.push(l)}}let s=[];for(let n in r)s.push(this.CreateFromMorphTargetSequence(n,r[n],t,i));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,c,u,d,p){if(u.length!==0){let g=[],v=[];po(u,g,v,d),g.length!==0&&p.push(new h(c,g,v))}},r=[],a=e.name||"default",s=e.fps||30,n=e.blendMode,o=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let c=l[h].keys;if(c&&c.length!==0)if(c[0].morphTargets){let u={},d=0;for(;d<c.length;d++)if(c[d].morphTargets)for(let p=0;p<c[d].morphTargets.length;p++)u[c[d].morphTargets[p]]=-1;for(let p in u){let g=[],v=[];for(let f=0;f!==c[d].morphTargets.length;++f){let m=c[d];g.push(m.time),v.push(+(m.morphTarget===p))}r.push(new fa(".morphTargetInfluence["+p+"]",g,v))}o=u.length*s}else{let u=".bones["+t[h].name+"]";i(ga,u+".position",c,"pos",r),i(Dr,u+".quaternion",c,"rot",r),i(ga,u+".scale",c,"scl",r)}}return r.length===0?null:new this(a,o,r,n)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function rg(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fa;case"vector":case"vector2":case"vector3":case"vector4":return ga;case"color":return fo;case"quaternion":return Dr;case"bool":case"boolean":return Wi;case"string":return Xi}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function ag(e){if(e.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=rg(e.type);if(e.times===void 0){let i=[],r=[];po(e.keys,i,r,"value"),e.times=i,e.values=r}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var ji={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},go=class{constructor(e,t,i){let r=this,a=!1,s=0,n=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){n++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,n),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,n),s===n&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],p=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},tc=new go,Ut=class{constructor(e){this.manager=e===void 0?tc:e,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ut.DEFAULT_MATERIAL_NAME="__DEFAULT";var mi={},sg=class extends Error{constructor(e,t){super(e),this.response=t}},fi=class extends Ut{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=ji.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:i,onError:r});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:i,onError:r});let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),n=this.mimeType,o=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=mi[e],c=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=u?parseInt(u):0,p=d!==0,g=0,v=new ReadableStream({start(f){m();function m(){c.read().then(({done:y,value:_})=>{if(y)f.close();else{g+=_.byteLength;let x=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:d});for(let T=0,E=h.length;T<E;T++){let L=h[T];L.onProgress&&L.onProgress(x)}f.enqueue(_),m()}})}}});return new Response(v)}throw new sg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,n));case"json":return l.json();default:if(n===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(n),c=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(c);return l.arrayBuffer().then(d=>u.decode(d))}}}).then(l=>{ji.add(e,l);let h=mi[e];delete mi[e];for(let c=0,u=h.length;c<u;c++){let d=h[c];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=mi[e];if(h===void 0)throw this.manager.itemError(e),l;delete mi[e];for(let c=0,u=h.length;c<u;c++){let d=h[c];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},ng=class extends Ut{constructor(e){super(e)}load(e,t,i,r){let a=this,s=new fi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{t(a.parse(JSON.parse(n)))}catch(o){r?r(o):console.error(o),a.manager.itemError(e)}},i,r)}parse(e){let t=[];for(let i=0;i<e.length;i++){let r=va.parse(e[i]);t.push(r)}return t}},og=class extends Ut{constructor(e){super(e)}load(e,t,i,r){let a=this,s=[],n=new gs,o=new fi(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(a.withCredentials);let l=0;function h(c){o.load(e[c],function(u){let d=a.parse(u,!0);s[c]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(n.minFilter=mt),n.image=s,n.format=d.format,n.needsUpdate=!0,t&&t(n))},i,r)}if(Array.isArray(e))for(let c=0,u=e.length;c<u;++c)h(c);else o.load(e,function(c){let u=a.parse(c,!0);if(u.isCubemap){let d=u.mipmaps.length/u.mipmapCount;for(let p=0;p<d;p++){s[p]={mipmaps:[]};for(let g=0;g<u.mipmapCount;g++)s[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+g]),s[p].format=u.format,s[p].width=u.width,s[p].height=u.height}n.image=s}else n.image.width=u.width,n.image.height=u.height,n.mipmaps=u.mipmaps;u.mipmapCount===1&&(n.minFilter=mt),n.format=u.format,n.needsUpdate=!0,t&&t(n)},i,r);return n}},_a=class extends Ut{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=ji.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;let n=Xr("img");function o(){h(),ji.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(c){h(),r&&r(c),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){n.removeEventListener("load",o,!1),n.removeEventListener("error",l,!1)}return n.addEventListener("load",o,!1),n.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(n.crossOrigin=this.crossOrigin),a.manager.itemStart(e),n.src=e,n}},lg=class extends Ut{constructor(e){super(e)}load(e,t,i,r){let a=new $r;a.colorSpace=yt;let s=new _a(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let n=0;function o(l){s.load(e[l],function(h){a.images[l]=h,n++,n===6&&(a.needsUpdate=!0,t&&t(a))},void 0,r)}for(let l=0;l<e.length;++l)o(l);return a}},hg=class extends Ut{constructor(e){super(e)}load(e,t,i,r){let a=this,s=new Hi,n=new fi(this.manager);return n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setPath(this.path),n.setWithCredentials(a.withCredentials),n.load(e,function(o){let l;try{l=a.parse(o)}catch(h){if(r!==void 0)r(h);else{console.error(h);return}}l.image===void 0?l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data):s.image=l.image,s.wrapS=l.wrapS===void 0?Ht:l.wrapS,s.wrapT=l.wrapT===void 0?Ht:l.wrapT,s.magFilter=l.magFilter===void 0?mt:l.magFilter,s.minFilter=l.minFilter===void 0?mt:l.minFilter,s.anisotropy=l.anisotropy===void 0?1:l.anisotropy,l.colorSpace===void 0?l.encoding!==void 0&&(s.encoding=l.encoding):s.colorSpace=l.colorSpace,l.flipY!==void 0&&(s.flipY=l.flipY),l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=Ai),l.mipmapCount===1&&(s.minFilter=mt),l.generateMipmaps!==void 0&&(s.generateMipmaps=l.generateMipmaps),s.needsUpdate=!0,t&&t(s,l)},i,r),s}},cg=class extends Ut{constructor(e){super(e)}load(e,t,i,r){let a=new ft,s=new _a(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(n){a.image=n,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},bi=class extends Ke{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},vo=class extends bi{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},_o=new Ne,ic=new w,rc=new w,yo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(ic),rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rc),t.updateMatrixWorld(),_o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ug=class extends yo{constructor(){super(new _t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=ir*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ac=class extends bi{constructor(e,t,i=0,r=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.distance=i,this.angle=r,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new ug}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},sc=new Ne,ya=new w,xo=new w,dg=class extends yo{constructor(){super(new _t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ya.setFromMatrixPosition(e.matrixWorld),i.position.copy(ya),xo.copy(i.position),xo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(xo),i.updateMatrixWorld(),r.makeTranslation(-ya.x,-ya.y,-ya.z),sc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc)}},nc=class extends bi{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new dg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},pg=class extends yo{constructor(){super(new ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mo=class extends bi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new pg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},oc=class extends bi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},lc=class extends bi{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},hc=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,r=e.y,a=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*r),t.addScaledVector(s[2],.488603*a),t.addScaledVector(s[3],.488603*i),t.addScaledVector(s[4],i*r*1.092548),t.addScaledVector(s[5],r*a*1.092548),t.addScaledVector(s[6],.315392*(3*a*a-1)),t.addScaledVector(s[7],i*a*1.092548),t.addScaledVector(s[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){let i=e.x,r=e.y,a=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],1.023328*r),t.addScaledVector(s[2],1.023328*a),t.addScaledVector(s[3],1.023328*i),t.addScaledVector(s[4],.858086*i*r),t.addScaledVector(s[5],.858086*r*a),t.addScaledVector(s[6],.743125*a*a-.247708),t.addScaledVector(s[7],.858086*i*a),t.addScaledVector(s[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){let i=e.x,r=e.y,a=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*a,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*a,t[6]=.315392*(3*a*a-1),t[7]=1.092548*i*a,t[8]=.546274*(i*i-r*r)}},cc=class extends bi{constructor(e=new hc,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},uc=class cu extends Ut{constructor(t){super(t),this.textures={}}load(t,i,r,a){let s=this,n=new fi(s.manager);n.setPath(s.path),n.setRequestHeader(s.requestHeader),n.setWithCredentials(s.withCredentials),n.load(t,function(o){try{i(s.parse(JSON.parse(o)))}catch(l){a?a(l):console.error(l),s.manager.itemError(t)}},r,a)}parse(t){let i=this.textures;function r(s){return i[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),i[s]}let a=cu.createMaterialFromType(t.type);if(t.uuid!==void 0&&(a.uuid=t.uuid),t.name!==void 0&&(a.name=t.name),t.color!==void 0&&a.color!==void 0&&a.color.setHex(t.color),t.roughness!==void 0&&(a.roughness=t.roughness),t.metalness!==void 0&&(a.metalness=t.metalness),t.sheen!==void 0&&(a.sheen=t.sheen),t.sheenColor!==void 0&&(a.sheenColor=new pe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(a.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&a.emissive!==void 0&&a.emissive.setHex(t.emissive),t.specular!==void 0&&a.specular!==void 0&&a.specular.setHex(t.specular),t.specularIntensity!==void 0&&(a.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&a.specularColor!==void 0&&a.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(a.shininess=t.shininess),t.clearcoat!==void 0&&(a.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=t.clearcoatRoughness),t.iridescence!==void 0&&(a.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(a.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(a.transmission=t.transmission),t.thickness!==void 0&&(a.thickness=t.thickness),t.attenuationDistance!==void 0&&(a.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&a.attenuationColor!==void 0&&a.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(a.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(a.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(a.fog=t.fog),t.flatShading!==void 0&&(a.flatShading=t.flatShading),t.blending!==void 0&&(a.blending=t.blending),t.combine!==void 0&&(a.combine=t.combine),t.side!==void 0&&(a.side=t.side),t.shadowSide!==void 0&&(a.shadowSide=t.shadowSide),t.opacity!==void 0&&(a.opacity=t.opacity),t.transparent!==void 0&&(a.transparent=t.transparent),t.alphaTest!==void 0&&(a.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(a.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(a.depthFunc=t.depthFunc),t.depthTest!==void 0&&(a.depthTest=t.depthTest),t.depthWrite!==void 0&&(a.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(a.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(a.blendSrc=t.blendSrc),t.blendDst!==void 0&&(a.blendDst=t.blendDst),t.blendEquation!==void 0&&(a.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(a.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(a.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(a.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&a.blendColor!==void 0&&a.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(a.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(a.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(a.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(a.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(a.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(a.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(a.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(a.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(a.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(a.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(a.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(a.rotation=t.rotation),t.linewidth!==void 0&&(a.linewidth=t.linewidth),t.dashSize!==void 0&&(a.dashSize=t.dashSize),t.gapSize!==void 0&&(a.gapSize=t.gapSize),t.scale!==void 0&&(a.scale=t.scale),t.polygonOffset!==void 0&&(a.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(a.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(a.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(a.dithering=t.dithering),t.alphaToCoverage!==void 0&&(a.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(a.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(a.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(a.visible=t.visible),t.toneMapped!==void 0&&(a.toneMapped=t.toneMapped),t.userData!==void 0&&(a.userData=t.userData),t.vertexColors!==void 0&&(a.vertexColors=typeof t.vertexColors=="number"?t.vertexColors>0:t.vertexColors),t.uniforms!==void 0)for(let s in t.uniforms){let n=t.uniforms[s];switch(a.uniforms[s]={},n.type){case"t":a.uniforms[s].value=r(n.value);break;case"c":a.uniforms[s].value=new pe().setHex(n.value);break;case"v2":a.uniforms[s].value=new Z().fromArray(n.value);break;case"v3":a.uniforms[s].value=new w().fromArray(n.value);break;case"v4":a.uniforms[s].value=new $e().fromArray(n.value);break;case"m3":a.uniforms[s].value=new He().fromArray(n.value);break;case"m4":a.uniforms[s].value=new Ne().fromArray(n.value);break;default:a.uniforms[s].value=n.value}}if(t.defines!==void 0&&(a.defines=t.defines),t.vertexShader!==void 0&&(a.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(a.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(a.glslVersion=t.glslVersion),t.extensions!==void 0)for(let s in t.extensions)a.extensions[s]=t.extensions[s];if(t.lights!==void 0&&(a.lights=t.lights),t.clipping!==void 0&&(a.clipping=t.clipping),t.size!==void 0&&(a.size=t.size),t.sizeAttenuation!==void 0&&(a.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(a.map=r(t.map)),t.matcap!==void 0&&(a.matcap=r(t.matcap)),t.alphaMap!==void 0&&(a.alphaMap=r(t.alphaMap)),t.bumpMap!==void 0&&(a.bumpMap=r(t.bumpMap)),t.bumpScale!==void 0&&(a.bumpScale=t.bumpScale),t.normalMap!==void 0&&(a.normalMap=r(t.normalMap)),t.normalMapType!==void 0&&(a.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),a.normalScale=new Z().fromArray(s)}return t.displacementMap!==void 0&&(a.displacementMap=r(t.displacementMap)),t.displacementScale!==void 0&&(a.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(a.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(a.roughnessMap=r(t.roughnessMap)),t.metalnessMap!==void 0&&(a.metalnessMap=r(t.metalnessMap)),t.emissiveMap!==void 0&&(a.emissiveMap=r(t.emissiveMap)),t.emissiveIntensity!==void 0&&(a.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(a.specularMap=r(t.specularMap)),t.specularIntensityMap!==void 0&&(a.specularIntensityMap=r(t.specularIntensityMap)),t.specularColorMap!==void 0&&(a.specularColorMap=r(t.specularColorMap)),t.envMap!==void 0&&(a.envMap=r(t.envMap)),t.envMapIntensity!==void 0&&(a.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(a.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(a.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(a.lightMap=r(t.lightMap)),t.lightMapIntensity!==void 0&&(a.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(a.aoMap=r(t.aoMap)),t.aoMapIntensity!==void 0&&(a.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(a.gradientMap=r(t.gradientMap)),t.clearcoatMap!==void 0&&(a.clearcoatMap=r(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(a.clearcoatRoughnessMap=r(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(a.clearcoatNormalMap=r(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(a.clearcoatNormalScale=new Z().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(a.iridescenceMap=r(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(a.iridescenceThicknessMap=r(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(a.transmissionMap=r(t.transmissionMap)),t.thicknessMap!==void 0&&(a.thicknessMap=r(t.thicknessMap)),t.anisotropyMap!==void 0&&(a.anisotropyMap=r(t.anisotropyMap)),t.sheenColorMap!==void 0&&(a.sheenColorMap=r(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(a.sheenRoughnessMap=r(t.sheenRoughnessMap)),a}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){return new{ShadowMaterial:Gh,SpriteMaterial:Nn,RawShaderMaterial:Vh,ShaderMaterial:qt,PointsMaterial:Gn,MeshPhysicalMaterial:Wh,MeshStandardMaterial:ho,MeshPhongMaterial:Xh,MeshToonMaterial:jh,MeshNormalMaterial:qh,MeshLambertMaterial:co,MeshDepthMaterial:Rn,MeshDistanceMaterial:Cn,MeshBasicMaterial:ci,MeshMatcapMaterial:Yh,LineDashedMaterial:Zh,LineBasicMaterial:Ct,Material:xt}[t]}},So=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},bo=class extends ke{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},dc=class extends Ut{constructor(e){super(e)}load(e,t,i,r){let a=this,s=new fi(a.manager);s.setPath(a.path),s.setRequestHeader(a.requestHeader),s.setWithCredentials(a.withCredentials),s.load(e,function(n){try{t(a.parse(JSON.parse(n)))}catch(o){r?r(o):console.error(o),a.manager.itemError(e)}},i,r)}parse(e){let t={},i={};function r(u,d){if(t[d]!==void 0)return t[d];let p=u.interleavedBuffers[d],g=a(u,p.buffer),v=new ns(rr(p.type,g),p.stride);return v.uuid=p.uuid,t[d]=v,v}function a(u,d){if(i[d]!==void 0)return i[d];let p=u.arrayBuffers[d],g=new Uint32Array(p).buffer;return i[d]=g,g}let s=e.isInstancedBufferGeometry?new bo:new ke,n=e.data.index;if(n!==void 0){let u=rr(n.type,n.array);s.setIndex(new Qe(u,1))}let o=e.data.attributes;for(let u in o){let d=o[u],p;if(d.isInterleavedBufferAttribute)p=new ia(r(e.data,d.data),d.itemSize,d.offset,d.normalized);else{let g=rr(d.type,d.array);p=new(d.isInstancedBufferAttribute?ki:Qe)(g,d.itemSize,d.normalized)}d.name!==void 0&&(p.name=d.name),d.usage!==void 0&&p.setUsage(d.usage),d.updateRange!==void 0&&(p.updateRange.offset=d.updateRange.offset,p.updateRange.count=d.updateRange.count),s.setAttribute(u,p)}let l=e.data.morphAttributes;if(l)for(let u in l){let d=l[u],p=[];for(let g=0,v=d.length;g<v;g++){let f=d[g],m;m=f.isInterleavedBufferAttribute?new ia(r(e.data,f.data),f.itemSize,f.offset,f.normalized):new Qe(rr(f.type,f.array),f.itemSize,f.normalized),f.name!==void 0&&(m.name=f.name),p.push(m)}s.morphAttributes[u]=p}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);let h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let u=0,d=h.length;u!==d;++u){let p=h[u];s.addGroup(p.start,p.count,p.materialIndex)}let c=e.data.boundingSphere;if(c!==void 0){let u=new w;c.center!==void 0&&u.fromArray(c.center),s.boundingSphere=new Gt(u,c.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}},mg=class extends Ut{constructor(e){super(e)}load(e,t,i,r){let a=this,s=this.path===""?So.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;let n=new fi(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,function(o){let l=null;try{l=JSON.parse(o)}catch(c){r!==void 0&&r(c),console.error("THREE:ObjectLoader: Can't parse "+e+".",c.message);return}let h=l.metadata;h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"?(r!==void 0&&r(Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e)):a.parse(l,t)},i,r)}async loadAsync(e,t){let i=this,r=this.path===""?So.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;let a=new fi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials);let s=await a.loadAsync(e,t),n=JSON.parse(s),o=n.metadata;if(o===void 0||o.type===void 0||o.type.toLowerCase()==="geometry")throw Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(n)}parse(e,t){let i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),a=this.parseGeometries(e.geometries,r),s=this.parseImages(e.images,function(){t!==void 0&&t(l)}),n=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,n),l=this.parseObject(e.object,a,o,n,i),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),t!==void 0){let c=!1;for(let u in s)if(s[u].data instanceof HTMLImageElement){c=!0;break}c===!1&&t(l)}return l}async parseAsync(e){let t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=await this.parseImagesAsync(e.images),s=this.parseTextures(e.textures,a),n=this.parseMaterials(e.materials,s),o=this.parseObject(e.object,r,n,s,t),l=this.parseSkeletons(e.skeletons,o);return this.bindSkeletons(o,l),o}parseShapes(e){let t={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){let a=new Mi().fromJSON(e[i]);t[a.uuid]=a}return t}parseSkeletons(e,t){let i={},r={};if(t.traverse(function(a){a.isBone&&(r[a.uuid]=a)}),e!==void 0)for(let a=0,s=e.length;a<s;a++){let n=new oh().fromJSON(e[a],r);i[n.uuid]=n}return i}parseGeometries(e,t){let i={};if(e!==void 0){let r=new dc;for(let a=0,s=e.length;a<s;a++){let n,o=e[a];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":n=r.parse(o);break;default:o.type in kh?n=kh[o.type].fromJSON(o,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${o.type}"`)}n.uuid=o.uuid,o.name!==void 0&&(n.name=o.name),o.userData!==void 0&&(n.userData=o.userData),i[o.uuid]=n}}return i}parseMaterials(e,t){let i={},r={};if(e!==void 0){let a=new uc;a.setTextures(t);for(let s=0,n=e.length;s<n;s++){let o=e[s];i[o.uuid]===void 0&&(i[o.uuid]=a.parse(o)),r[o.uuid]=i[o.uuid]}}return r}parseAnimations(e){let t={};if(e!==void 0)for(let i=0;i<e.length;i++){let r=e[i],a=va.parse(r);t[a.uuid]=a}return t}parseImages(e,t){let i=this,r={},a;function s(o){return i.manager.itemStart(o),a.load(o,function(){i.manager.itemEnd(o)},void 0,function(){i.manager.itemError(o),i.manager.itemEnd(o)})}function n(o){if(typeof o=="string"){let l=o;return s(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:i.resourcePath+l)}return o.data?{data:rr(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){a=new _a(new go(t)),a.setCrossOrigin(this.crossOrigin);for(let o=0,l=e.length;o<l;o++){let h=e[o],c=h.url;if(Array.isArray(c)){let u=[];for(let d=0,p=c.length;d<p;d++){let g=c[d],v=n(g);v!==null&&(v instanceof HTMLImageElement?u.push(v):u.push(new Hi(v.data,v.width,v.height)))}r[h.uuid]=new Ii(u)}else{let u=n(h.url);r[h.uuid]=new Ii(u)}}}return r}async parseImagesAsync(e){let t=this,i={},r;async function a(s){if(typeof s=="string"){let n=s,o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(n)?n:t.resourcePath+n;return await r.loadAsync(o)}return s.data?{data:rr(s.type,s.data),width:s.width,height:s.height}:null}if(e!==void 0&&e.length>0){r=new _a(this.manager),r.setCrossOrigin(this.crossOrigin);for(let s=0,n=e.length;s<n;s++){let o=e[s],l=o.url;if(Array.isArray(l)){let h=[];for(let c=0,u=l.length;c<u;c++){let d=l[c],p=await a(d);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Hi(p.data,p.width,p.height)))}i[o.uuid]=new Ii(h)}else{let h=await a(o.url);i[o.uuid]=new Ii(h)}}}return i}parseTextures(e,t){function i(a,s){return typeof a=="number"?a:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a),s[a])}let r={};if(e!==void 0)for(let a=0,s=e.length;a<s;a++){let n=e[a];n.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',n.uuid),t[n.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",n.image);let o=t[n.image],l=o.data,h;Array.isArray(l)?(h=new $r,l.length===6&&(h.needsUpdate=!0)):(h=l&&l.data?new Hi:new ft,l&&(h.needsUpdate=!0)),h.source=o,h.uuid=n.uuid,n.name!==void 0&&(h.name=n.name),n.mapping!==void 0&&(h.mapping=i(n.mapping,fg)),n.channel!==void 0&&(h.channel=n.channel),n.offset!==void 0&&h.offset.fromArray(n.offset),n.repeat!==void 0&&h.repeat.fromArray(n.repeat),n.center!==void 0&&h.center.fromArray(n.center),n.rotation!==void 0&&(h.rotation=n.rotation),n.wrap!==void 0&&(h.wrapS=i(n.wrap[0],pc),h.wrapT=i(n.wrap[1],pc)),n.format!==void 0&&(h.format=n.format),n.internalFormat!==void 0&&(h.internalFormat=n.internalFormat),n.type!==void 0&&(h.type=n.type),n.colorSpace!==void 0&&(h.colorSpace=n.colorSpace),n.encoding!==void 0&&(h.encoding=n.encoding),n.minFilter!==void 0&&(h.minFilter=i(n.minFilter,mc)),n.magFilter!==void 0&&(h.magFilter=i(n.magFilter,mc)),n.anisotropy!==void 0&&(h.anisotropy=n.anisotropy),n.flipY!==void 0&&(h.flipY=n.flipY),n.generateMipmaps!==void 0&&(h.generateMipmaps=n.generateMipmaps),n.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=n.premultiplyAlpha),n.unpackAlignment!==void 0&&(h.unpackAlignment=n.unpackAlignment),n.compareFunction!==void 0&&(h.compareFunction=n.compareFunction),n.userData!==void 0&&(h.userData=n.userData),r[n.uuid]=h}return r}parseObject(e,t,i,r,a){let s;function n(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function o(u){if(u!==void 0){if(Array.isArray(u)){let d=[];for(let p=0,g=u.length;p<g;p++){let v=u[p];i[v]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",v),d.push(i[v])}return d}return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),i[u]}}function l(u){return r[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),r[u]}let h,c;switch(e.type){case"Scene":s=new Dn,e.background!==void 0&&(Number.isInteger(e.background)?s.background=new pe(e.background):s.background=l(e.background)),e.environment!==void 0&&(s.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Un(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new ql(e.fog.color,e.fog.density)),e.fog.name!==""&&(s.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(s.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(s.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":s=new _t(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new ea(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new oc(e.color,e.intensity);break;case"DirectionalLight":s=new Mo(e.color,e.intensity);break;case"PointLight":s=new nc(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new lc(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new ac(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":s=new vo(e.color,e.groundColor,e.intensity);break;case"LightProbe":s=new cc().fromJSON(e);break;case"SkinnedMesh":h=n(e.geometry),c=o(e.material),s=new sh(h,c),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":h=n(e.geometry),c=o(e.material),s=new vt(h,c);break;case"InstancedMesh":h=n(e.geometry),c=o(e.material);let u=e.count,d=e.instanceMatrix,p=e.instanceColor;s=new Hn(h,c,u),s.instanceMatrix=new ki(new Float32Array(d.array),16),p!==void 0&&(s.instanceColor=new ki(new Float32Array(p.array),p.itemSize));break;case"LOD":s=new Ql;break;case"Line":s=new pi(n(e.geometry),o(e.material));break;case"LineLoop":s=new fh(n(e.geometry),o(e.material));break;case"LineSegments":s=new ei(n(e.geometry),o(e.material));break;case"PointCloud":case"Points":s=new Wn(n(e.geometry),o(e.material));break;case"Sprite":s=new Kl(o(e.material));break;case"Group":s=new zi;break;case"Bone":s=new zn;break;default:s=new Ke}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix===void 0?(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)):(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)),e.up!==void 0&&s.up.fromArray(e.up),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){let u=e.children;for(let d=0;d<u.length;d++)s.add(this.parseObject(u[d],t,i,r,a))}if(e.animations!==void 0){let u=e.animations;for(let d=0;d<u.length;d++){let p=u[d];s.animations.push(a[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);let u=e.levels;for(let d=0;d<u.length;d++){let p=u[d],g=s.getObjectByProperty("uuid",p.object);g!==void 0&&s.addLevel(g,p.distance,p.hysteresis)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){let r=t[i.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}},fg={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},pc={RepeatWrapping:Qi,ClampToEdgeWrapping:Ht,MirroredRepeatWrapping:Fr},mc={NearestFilter:Et,NearestMipmapNearestFilter:ks,NearestMipmapLinearFilter:Gs,LinearFilter:mt,LinearMipmapNearestFilter:Vs,LinearMipmapLinearFilter:Ai},gg=class extends Ut{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=ji.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;let n={};n.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",n.headers=this.requestHeader,fetch(e,n).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(o){ji.add(e,o),t&&t(o),a.manager.itemEnd(e)}).catch(function(o){r&&r(o),a.manager.itemError(e),a.manager.itemEnd(e)}),a.manager.itemStart(e)}},Rs,To=class{static getContext(){return Rs===void 0&&(Rs=new(window.AudioContext||window.webkitAudioContext)),Rs}static setContext(e){Rs=e}},vg=class extends Ut{constructor(e){super(e)}load(e,t,i,r){let a=this,s=new fi(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{let l=o.slice(0);To.getContext().decodeAudioData(l,function(h){t(h)},n)}catch(l){n(l)}},i,r);function n(o){r?r(o):console.error(o),a.manager.itemError(e)}}},fc=new Ne,gc=new Ne,qi=new Ne,_g=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new _t,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new _t,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,qi.copy(e.projectionMatrix);let i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(Pi*t.fov*.5)/t.zoom,s,n;gc.elements[12]=-i,fc.elements[12]=i,s=-a*t.aspect+r,n=a*t.aspect+r,qi.elements[0]=2*t.near/(n-s),qi.elements[8]=(n+s)/(n-s),this.cameraL.projectionMatrix.copy(qi),s=-a*t.aspect-r,n=a*t.aspect-r,qi.elements[0]=2*t.near/(n-s),qi.elements[8]=(n+s)/(n-s),this.cameraR.projectionMatrix.copy(qi)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(gc),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(fc)}},vc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_c(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=_c();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function _c(){return(typeof performance>"u"?Date:performance).now()}var Yi=new w,yc=new wt,yg=new w,Zi=new w,xg=class extends Ke{constructor(){super(),this.type="AudioListener",this.context=To.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new vc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter===null?this.gain.disconnect(this.context.destination):(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Yi,yc,yg),Zi.set(0,0,-1).applyQuaternion(yc),t.positionX){let r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Yi.x,r),t.positionY.linearRampToValueAtTime(Yi.y,r),t.positionZ.linearRampToValueAtTime(Yi.z,r),t.forwardX.linearRampToValueAtTime(Zi.x,r),t.forwardY.linearRampToValueAtTime(Zi.y,r),t.forwardZ.linearRampToValueAtTime(Zi.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(Yi.x,Yi.y,Yi.z),t.setOrientation(Zi.x,Zi.y,Zi.z,i.x,i.y,i.z)}},xc=class extends Ke{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1)console.warn("THREE.Audio: this Audio has no playback control.");else return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress%=this.duration||this.buffer.duration),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1)console.warn("THREE.Audio: this Audio has no playback control.");else return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||=[],this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},Ji=new w,Mc=new wt,Mg=new w,Ki=new w,Sg=class extends xc{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ji,Mc,Mg),Ki.set(0,0,1).applyQuaternion(Mc);let t=this.panner;if(t.positionX){let i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ji.x,i),t.positionY.linearRampToValueAtTime(Ji.y,i),t.positionZ.linearRampToValueAtTime(Ji.z,i),t.orientationX.linearRampToValueAtTime(Ki.x,i),t.orientationY.linearRampToValueAtTime(Ki.y,i),t.orientationZ.linearRampToValueAtTime(Ki.z,i)}else t.setPosition(Ji.x,Ji.y,Ji.z),t.setOrientation(Ki.x,Ki.y,Ki.z)}},bg=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},Sc=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,a,s;switch(t){case"quaternion":r=this._slerp,a=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,a=this._select,s=this._setAdditiveIdentityOther,this.buffer=Array(i*5);break;default:r=this._lerp,a=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=a,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,r=this.valueSize,a=e*r+r,s=this.cumulativeWeight;if(s===0){for(let n=0;n!==r;++n)i[a+n]=i[n];s=t}else{s+=t;let n=t/s;this._mixBufferRegion(i,a,0,n,r)}this.cumulativeWeight=s}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,r=e*t+t,a=this.cumulativeWeight,s=this.cumulativeWeightAdditive,n=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){let o=t*this._origIndex;this._mixBufferRegion(i,r,o,1-a,t)}s>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let o=t,l=t+t;o!==l;++o)if(i[o]!==i[o+t]){n.setValue(i,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let a=i,s=r;a!==s;++a)t[a]=t[r+a%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,a){if(r>=.5)for(let s=0;s!==a;++s)e[t+s]=e[i+s]}_slerp(e,t,i,r){wt.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,a){let s=this._workIndex*a;wt.multiplyQuaternionsFlat(e,s,e,t,e,i),wt.slerpFlat(e,t,e,t,e,s,r)}_lerp(e,t,i,r,a){let s=1-r;for(let n=0;n!==a;++n){let o=t+n;e[o]=e[o]*s+e[i+n]*r}}_lerpAdditive(e,t,i,r,a){for(let s=0;s!==a;++s){let n=t+s;e[n]=e[n]+e[i+s]*r}}},Tg="\\[\\]\\.:\\/",Eg=RegExp("[\\[\\]\\.:\\/]","g"),Eo="[^\\[\\]\\.:\\/]",wg="[^"+Tg.replace("\\.","")+"]",Ag="((?:WC+[\\/:])*)".replace("WC",Eo),Rg="(WCOD+)?".replace("WCOD",wg),Cg="(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC",Eo),Lg="\\.(WC+)(?:\\[(.+)\\])?".replace("WC",Eo),Pg=RegExp("^"+Ag+Rg+Cg+Lg+"$"),Ig=["material","materials","bones","map"],Ug=class{constructor(e,t,i){let r=i||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},et=class Nr{constructor(t,i,r){this.path=i,this.parsedPath=r||Nr.parseTrackName(i),this.node=Nr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Nr.Composite(t,i,r):new Nr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Eg,"")}static parseTrackName(t){let i=Pg.exec(t);if(i===null)throw Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=r.nodeName.substring(a+1);Ig.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let n=0;n<s.length;n++){let o=s[n];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,s=i.propertyIndex;if(t||(t=Nr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let n=t[a];if(n===void 0){let h=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate):o=this.Versioning.NeedsUpdate;let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=s}else n.fromArray!==void 0&&n.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(l=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=Ug,et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray],et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dg=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Nt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,a=this._bindings,s=a.length,n,o=e.length,l=this.nCachedObjects_;for(let h=0,c=arguments.length;h!==c;++h){let u=arguments[h],d=u.uuid,p=t[d];if(p===void 0){p=o++,t[d]=p,e.push(u);for(let g=0,v=s;g!==v;++g)a[g].push(new et(u,i[g],r[g]))}else if(p<l){n=e[p];let g=--l,v=e[g];t[v.uuid]=p,e[p]=v,t[d]=g,e[g]=u;for(let f=0,m=s;f!==m;++f){let y=a[f],_=y[g],x=y[p];y[p]=_,x===void 0&&(x=new et(u,i[f],r[f])),y[g]=x}}else e[p]!==n&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,a=this.nCachedObjects_;for(let s=0,n=arguments.length;s!==n;++s){let o=arguments[s],l=o.uuid,h=t[l];if(h!==void 0&&h>=a){let c=a++,u=e[c];t[u.uuid]=h,e[h]=u,t[l]=c,e[c]=o;for(let d=0,p=r;d!==p;++d){let g=i[d],v=g[c],f=g[h];g[h]=v,g[c]=f}}}this.nCachedObjects_=a}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,a=this.nCachedObjects_,s=e.length;for(let n=0,o=arguments.length;n!==o;++n){let l=arguments[n].uuid,h=t[l];if(h!==void 0)if(delete t[l],h<a){let c=--a,u=e[c],d=--s,p=e[d];t[u.uuid]=h,e[h]=u,t[p.uuid]=c,e[c]=p,e.pop();for(let g=0,v=r;g!==v;++g){let f=i[g],m=f[c],y=f[d];f[h]=m,f[c]=y,f.pop()}}else{let c=--s,u=e[c];c>0&&(t[u.uuid]=h),e[h]=u,e.pop();for(let d=0,p=r;d!==p;++d){let g=i[d];g[h]=g[c],g.pop()}}}this.nCachedObjects_=a}subscribe_(e,t){let i=this._bindingsIndicesByPath,r=i[e],a=this._bindings;if(r!==void 0)return a[r];let s=this._paths,n=this._parsedPaths,o=this._objects,l=o.length,h=this.nCachedObjects_,c=Array(l);r=a.length,i[e]=r,s.push(e),n.push(t),a.push(c);for(let u=h,d=o.length;u!==d;++u){let p=o[u];c[u]=new et(p,e,t)}return c}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let r=this._paths,a=this._parsedPaths,s=this._bindings,n=s.length-1,o=s[n],l=e[n];t[l]=i,s[i]=o,s.pop(),a[i]=a[n],a.pop(),r[i]=r[n],r.pop()}}},bc=class{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;let a=t.tracks,s=a.length,n=Array(s),o={endingStart:Ci,endingEnd:Ci};for(let l=0;l!==s;++l){let h=a[l].createInterpolant(null);n[l]=h,h.settings=o}this._interpolantSettings=o,this._interpolants=n,this._propertyBindings=Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ho,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let r=this._clip.duration,a=e._clip.duration,s=a/r,n=r/a;e.warp(1,s,t),this.warp(n,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let r=this._mixer,a=r.time,s=this.timeScale,n=this._timeScaleInterpolant;n===null&&(n=r._lendControlInterpolant(),this._timeScaleInterpolant=n);let o=n.parameterPositions,l=n.sampleValues;return o[0]=a,o[1]=a+i,l[0]=e/s,l[1]=t/s,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}let a=this._startTime;if(a!==null){let o=(e-a)*i;o<0||i===0?t=0:(this._startTime=null,t=i*o)}t*=this._updateTimeScale(e);let s=this._updateTime(t),n=this._updateWeight(e);if(n>0){let o=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Xs:for(let h=0,c=o.length;h!==c;++h)o[h].evaluate(s),l[h].accumulateAdditive(n);break;case wa:default:for(let h=0,c=o.length;h!==c;++h)o[h].evaluate(s),l[h].accumulate(r,n)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,r=this.time+e,a=this._loopCount,s=i===ko;if(e===0)return a===-1?r:s&&(a&1)==1?t-r:r;if(i===2200){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),r>=t||r<0){let n=Math.floor(r/t);r-=t*n,a+=Math.abs(n);let o=this.repetitions-a;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(o===1){let l=e<0;this._setEndings(l,!l,s)}else this._setEndings(!1,!1,s);this._loopCount=a,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:n})}}else this.time=r;if(s&&(a&1)==1)return t-r}return r}_setEndings(e,t,i){let r=this._interpolantSettings;i?(r.endingStart=Li,r.endingEnd=Li):(r.endingStart=e?this.zeroSlopeAtStart?Li:Ci:kr,r.endingEnd=t?this.zeroSlopeAtEnd?Li:Ci:kr)}_scheduleFading(e,t,i){let r=this._mixer,a=r.time,s=this._weightInterpolant;s===null&&(s=r._lendControlInterpolant(),this._weightInterpolant=s);let n=s.parameterPositions,o=s.sampleValues;return n[0]=a,o[0]=t,n[1]=a+e,o[1]=i,this}},Ng=new Float32Array(1),Og=class extends ai{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,a=r.length,s=e._propertyBindings,n=e._interpolants,o=i.uuid,l=this._bindingsByRootAndName,h=l[o];h===void 0&&(h={},l[o]=h);for(let c=0;c!==a;++c){let u=r[c],d=u.name,p=h[d];if(p!==void 0)++p.referenceCount,s[c]=p;else{if(p=s[c],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,o,d));continue}let g=t&&t._propertyBindings[c].binding.parsedPath;p=new Sc(et.create(i,d,g),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,o,d),s[c]=p}n[c].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,r=e._clip.uuid,a=this._actionsByClip[r];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,r,i)}let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let a=t[i];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let r=this._actions,a=this._actionsByClip,s=a[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=s;else{let n=s.knownActions;e._byClipCacheIndex=n.length,n.push(e)}e._cacheIndex=r.length,r.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let a=e._clip.uuid,s=this._actionsByClip,n=s[a],o=n.knownActions,l=o[o.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,o[h]=l,o.pop(),e._byClipCacheIndex=null;let c=n.actionByRoot,u=(e._localRoot||this._root).uuid;delete c[u],o.length===0&&delete s[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let a=t[i];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_addInactiveBinding(e,t,i){let r=this._bindingsByRootAndName,a=this._bindings,s=r[t];s===void 0&&(s={},r[t]=s),s[i]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,a=i.path,s=this._bindingsByRootAndName,n=s[r],o=t[t.length-1],l=e._cacheIndex;o._cacheIndex=l,t[l]=o,t.pop(),delete n[a],Object.keys(n).length===0&&delete s[r]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new mo(new Float32Array(2),new Float32Array(2),1,Ng),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,a=t[r];e.__cacheIndex=r,t[r]=e,a.__cacheIndex=i,t[i]=a}clipAction(e,t,i){let r=t||this._root,a=r.uuid,s=typeof e=="string"?va.findByName(r,e):e,n=s===null?e:s.uuid,o=this._actionsByClip[n],l=null;if(i===void 0&&(i=s===null?wa:s.blendMode),o!==void 0){let c=o.actionByRoot[a];if(c!==void 0&&c.blendMode===i)return c;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;let h=new bc(this,s,t,i);return this._bindAction(h,l),this._addInactiveAction(h,n,a),h}existingAction(e,t){let i=t||this._root,r=i.uuid,a=typeof e=="string"?va.findByName(i,e):e,s=a?a.uuid:e,n=this._actionsByClip[s];return n===void 0?null:n.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,a=Math.sign(e),s=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(r,e,a,s);let n=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)n[l].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,a=r[i];if(a!==void 0){let s=a.knownActions;for(let n=0,o=s.length;n!==o;++n){let l=s[n];this._deactivateAction(l);let h=l._cacheIndex,c=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,c._cacheIndex=h,t[h]=c,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let a in i){let s=i[a].actionByRoot[t];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let r=this._bindingsByRootAndName[t];if(r!==void 0)for(let a in r){let s=r[a];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}},Fg=class uu{constructor(t){this.value=t}clone(){return new uu(this.value.clone===void 0?this.value:this.value.clone())}},Bg=0,zg=class extends ai{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Bg++}),this.name="",this.usage=Ca,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let i=0,r=t.length;i<r;i++)this.uniforms.push(t[i].clone());return this}clone(){return new this.constructor().copy(this)}},Hg=class extends ns{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},kg=class{constructor(e,t,i,r,a){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Gg=class{constructor(e,t,i=0,r=1/0){this.ray=new hr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return wo(e,this,i,t),i.sort(Tc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)wo(e[r],this,i,t);return i.sort(Tc),i}};function Tc(e,t){return e.distance-t.distance}function wo(e,t,i,r){if(e.layers.test(t.layers)&&e.raycast(t,i),r===!0){let a=e.children;for(let s=0,n=a.length;s<n;s++)wo(a[s],t,i,!0)}}var Vg=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Wg=class{constructor(e=1,t=0,i=0){return this.radius=e,this.theta=t,this.y=i,this}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}},Ec=new Z,Xg=class{constructor(e=new Z(1/0,1/0),t=new Z(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ec.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ec).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wc=new w,Cs=new w,jg=class{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){wc.subVectors(e,this.start),Cs.subVectors(this.end,this.start);let i=Cs.dot(Cs),r=Cs.dot(wc)/i;return t&&(r=at(r,0,1)),r}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Ac=new w,qg=class extends Ke{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let i=new ke,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,n=1;s<32;s++,n++){let o=s/32*Math.PI*2,l=n/32*Math.PI*2;r.push(Math.cos(o),Math.sin(o),1,Math.cos(l),Math.sin(l),1)}i.setAttribute("position",new ge(r,3));let a=new Ct({fog:!1,toneMapped:!1});this.cone=new ei(i,a),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Ac.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ac),this.color===void 0?this.cone.material.color.copy(this.light.color):this.cone.material.color.set(this.color)}},Ti=new w,Ls=new Ne,Ao=new Ne,Yg=class extends ei{constructor(e){let t=Rc(e),i=new ke,r=[],a=[],s=new pe(0,0,1),n=new pe(0,1,0);for(let l=0;l<t.length;l++){let h=t[l];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),a.push(s.r,s.g,s.b),a.push(n.r,n.g,n.b))}i.setAttribute("position",new ge(r,3)),i.setAttribute("color",new ge(a,3));let o=new Ct({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,i=this.geometry,r=i.getAttribute("position");Ao.copy(this.root.matrixWorld).invert();for(let a=0,s=0;a<t.length;a++){let n=t[a];n.parent&&n.parent.isBone&&(Ls.multiplyMatrices(Ao,n.matrixWorld),Ti.setFromMatrixPosition(Ls),r.setXYZ(s,Ti.x,Ti.y,Ti.z),Ls.multiplyMatrices(Ao,n.parent.matrixWorld),Ti.setFromMatrixPosition(Ls),r.setXYZ(s+1,Ti.x,Ti.y,Ti.z),s+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}};function Rc(e){let t=[];e.isBone===!0&&t.push(e);for(let i=0;i<e.children.length;i++)t.push.apply(t,Rc(e.children[i]));return t}var Zg=class extends vt{constructor(e,t,i){let r=new As(t,4,2),a=new ci({wireframe:!0,fog:!1,toneMapped:!1});super(r,a),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color===void 0?this.material.color.copy(this.light.color):this.material.color.set(this.color)}},Jg=new w,Cc=new pe,Lc=new pe,Kg=class extends Ke{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";let r=new no(t);r.rotateY(Math.PI*.5),this.material=new ci({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let a=r.getAttribute("position"),s=new Float32Array(a.count*3);r.setAttribute("color",new Qe(s,3)),this.add(new vt(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");Cc.copy(this.light.color),Lc.copy(this.light.groundColor);for(let i=0,r=t.count;i<r;i++){let a=i<r/2?Cc:Lc;t.setXYZ(i,a.r,a.g,a.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Jg.setFromMatrixPosition(this.light.matrixWorld).negate())}},$g=class extends ei{constructor(e=10,t=10,i=4473924,r=8947848){i=new pe(i),r=new pe(r);let a=t/2,s=e/t,n=e/2,o=[],l=[];for(let u=0,d=0,p=-n;u<=t;u++,p+=s){o.push(-n,0,p,n,0,p),o.push(p,0,-n,p,0,n);let g=u===a?i:r;g.toArray(l,d),d+=3,g.toArray(l,d),d+=3,g.toArray(l,d),d+=3,g.toArray(l,d),d+=3}let h=new ke;h.setAttribute("position",new ge(o,3)),h.setAttribute("color",new ge(l,3));let c=new Ct({vertexColors:!0,toneMapped:!1});super(h,c),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Qg=class extends ei{constructor(e=10,t=16,i=8,r=64,a=4473924,s=8947848){a=new pe(a),s=new pe(s);let n=[],o=[];if(t>1)for(let c=0;c<t;c++){let u=c/t*(Math.PI*2),d=Math.sin(u)*e,p=Math.cos(u)*e;n.push(0,0,0),n.push(d,0,p);let g=c&1?a:s;o.push(g.r,g.g,g.b),o.push(g.r,g.g,g.b)}for(let c=0;c<i;c++){let u=c&1?a:s,d=e-e/i*c;for(let p=0;p<r;p++){let g=p/r*(Math.PI*2),v=Math.sin(g)*d,f=Math.cos(g)*d;n.push(v,0,f),o.push(u.r,u.g,u.b),g=(p+1)/r*(Math.PI*2),v=Math.sin(g)*d,f=Math.cos(g)*d,n.push(v,0,f),o.push(u.r,u.g,u.b)}}let l=new ke;l.setAttribute("position",new ge(n,3)),l.setAttribute("color",new ge(o,3));let h=new Ct({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Pc=new w,Ps=new w,Ic=new w,e0=class extends Ke{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new ke;r.setAttribute("position",new ge([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let a=new Ct({fog:!1,toneMapped:!1});this.lightPlane=new pi(r,a),this.add(this.lightPlane),r=new ke,r.setAttribute("position",new ge([0,0,0,0,0,1],3)),this.targetLine=new pi(r,a),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Pc.setFromMatrixPosition(this.light.matrixWorld),Ps.setFromMatrixPosition(this.light.target.matrixWorld),Ic.subVectors(Ps,Pc),this.lightPlane.lookAt(Ps),this.color===void 0?(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)):(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)),this.targetLine.lookAt(Ps),this.targetLine.scale.z=Ic.length()}},Is=new w,st=new Qa,t0=class extends ei{constructor(e){let t=new ke,i=new Ct({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],a=[],s={};n("n1","n2"),n("n2","n4"),n("n4","n3"),n("n3","n1"),n("f1","f2"),n("f2","f4"),n("f4","f3"),n("f3","f1"),n("n1","f1"),n("n2","f2"),n("n3","f3"),n("n4","f4"),n("p","n1"),n("p","n2"),n("p","n3"),n("p","n4"),n("u1","u2"),n("u2","u3"),n("u3","u1"),n("c","t"),n("p","c"),n("cn1","cn2"),n("cn3","cn4"),n("cf1","cf2"),n("cf3","cf4");function n(p,g){o(p),o(g)}function o(p){r.push(0,0,0),a.push(0,0,0),s[p]===void 0&&(s[p]=[]),s[p].push(r.length/3-1)}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(a,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();let l=new pe(16755200),h=new pe(16711680),c=new pe(43775),u=new pe(16777215),d=new pe(3355443);this.setColors(l,h,c,u,d)}setColors(e,t,i,r,a){let s=this.geometry.getAttribute("color");s.setXYZ(0,e.r,e.g,e.b),s.setXYZ(1,e.r,e.g,e.b),s.setXYZ(2,e.r,e.g,e.b),s.setXYZ(3,e.r,e.g,e.b),s.setXYZ(4,e.r,e.g,e.b),s.setXYZ(5,e.r,e.g,e.b),s.setXYZ(6,e.r,e.g,e.b),s.setXYZ(7,e.r,e.g,e.b),s.setXYZ(8,e.r,e.g,e.b),s.setXYZ(9,e.r,e.g,e.b),s.setXYZ(10,e.r,e.g,e.b),s.setXYZ(11,e.r,e.g,e.b),s.setXYZ(12,e.r,e.g,e.b),s.setXYZ(13,e.r,e.g,e.b),s.setXYZ(14,e.r,e.g,e.b),s.setXYZ(15,e.r,e.g,e.b),s.setXYZ(16,e.r,e.g,e.b),s.setXYZ(17,e.r,e.g,e.b),s.setXYZ(18,e.r,e.g,e.b),s.setXYZ(19,e.r,e.g,e.b),s.setXYZ(20,e.r,e.g,e.b),s.setXYZ(21,e.r,e.g,e.b),s.setXYZ(22,e.r,e.g,e.b),s.setXYZ(23,e.r,e.g,e.b),s.setXYZ(24,t.r,t.g,t.b),s.setXYZ(25,t.r,t.g,t.b),s.setXYZ(26,t.r,t.g,t.b),s.setXYZ(27,t.r,t.g,t.b),s.setXYZ(28,t.r,t.g,t.b),s.setXYZ(29,t.r,t.g,t.b),s.setXYZ(30,t.r,t.g,t.b),s.setXYZ(31,t.r,t.g,t.b),s.setXYZ(32,i.r,i.g,i.b),s.setXYZ(33,i.r,i.g,i.b),s.setXYZ(34,i.r,i.g,i.b),s.setXYZ(35,i.r,i.g,i.b),s.setXYZ(36,i.r,i.g,i.b),s.setXYZ(37,i.r,i.g,i.b),s.setXYZ(38,r.r,r.g,r.b),s.setXYZ(39,r.r,r.g,r.b),s.setXYZ(40,a.r,a.g,a.b),s.setXYZ(41,a.r,a.g,a.b),s.setXYZ(42,a.r,a.g,a.b),s.setXYZ(43,a.r,a.g,a.b),s.setXYZ(44,a.r,a.g,a.b),s.setXYZ(45,a.r,a.g,a.b),s.setXYZ(46,a.r,a.g,a.b),s.setXYZ(47,a.r,a.g,a.b),s.setXYZ(48,a.r,a.g,a.b),s.setXYZ(49,a.r,a.g,a.b),s.needsUpdate=!0}update(){let e=this.geometry,t=this.pointMap;st.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),ot("c",t,e,st,0,0,-1),ot("t",t,e,st,0,0,1),ot("n1",t,e,st,-1,-1,-1),ot("n2",t,e,st,1,-1,-1),ot("n3",t,e,st,-1,1,-1),ot("n4",t,e,st,1,1,-1),ot("f1",t,e,st,-1,-1,1),ot("f2",t,e,st,1,-1,1),ot("f3",t,e,st,-1,1,1),ot("f4",t,e,st,1,1,1),ot("u1",t,e,st,.7,1.1,-1),ot("u2",t,e,st,-.7,1.1,-1),ot("u3",t,e,st,0,2,-1),ot("cf1",t,e,st,-1,0,1),ot("cf2",t,e,st,1,0,1),ot("cf3",t,e,st,0,-1,1),ot("cf4",t,e,st,0,1,1),ot("cn1",t,e,st,-1,0,-1),ot("cn2",t,e,st,1,0,-1),ot("cn3",t,e,st,0,-1,-1),ot("cn4",t,e,st,0,1,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function ot(e,t,i,r,a,s,n){Is.set(a,s,n).unproject(r);let o=t[e];if(o!==void 0){let l=i.getAttribute("position");for(let h=0,c=o.length;h<c;h++)l.setXYZ(o[h],Is.x,Is.y,Is.z)}}var Us=new Qt,i0=class extends ei{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(24),a=new ke;a.setIndex(new Qe(i,1)),a.setAttribute("position",new Qe(r,3)),super(a,new Ct({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Us.setFromObject(this.object),Us.isEmpty())return;let t=Us.min,i=Us.max,r=this.geometry.attributes.position,a=r.array;a[0]=i.x,a[1]=i.y,a[2]=i.z,a[3]=t.x,a[4]=i.y,a[5]=i.z,a[6]=t.x,a[7]=t.y,a[8]=i.z,a[9]=i.x,a[10]=t.y,a[11]=i.z,a[12]=i.x,a[13]=i.y,a[14]=t.z,a[15]=t.x,a[16]=i.y,a[17]=t.z,a[18]=t.x,a[19]=t.y,a[20]=t.z,a[21]=i.x,a[22]=t.y,a[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},r0=class extends ei{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],a=new ke;a.setIndex(new Qe(i,1)),a.setAttribute("position",new ge(r,3)),super(a,new Ct({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},a0=class extends pi{constructor(e,t=1,i=16776960){let r=i,a=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],s=new ke;s.setAttribute("position",new ge(a,3)),s.computeBoundingSphere(),super(s,new Ct({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let n=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],o=new ke;o.setAttribute("position",new ge(n,3)),o.computeBoundingSphere(),this.add(new vt(o,new ci({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Uc=new w,Ds,Ro,s0=class extends Ke{constructor(e=new w(0,0,1),t=new w(0,0,0),i=1,r=16776960,a=i*.2,s=a*.2){super(),this.type="ArrowHelper",Ds===void 0&&(Ds=new ke,Ds.setAttribute("position",new ge([0,0,0,0,1,0],3)),Ro=new ca(0,.5,1,5,1),Ro.translate(0,-.5,0)),this.position.copy(t),this.line=new pi(Ds,new Ct({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new vt(Ro,new ci({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,a,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Uc.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Uc,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},n0=class extends ei{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new ke;r.setAttribute("position",new ge(t,3)),r.setAttribute("color",new ge(i,3));let a=new Ct({vertexColors:!0,toneMapped:!1});super(r,a),this.type="AxesHelper"}setColors(e,t,i){let r=new pe,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(t),r.toArray(a,6),r.toArray(a,9),r.set(i),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},o0=class{constructor(){this.type="ShapePath",this.color=new pe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Pr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,a,s){return this.currentPath.bezierCurveTo(e,t,i,r,a,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){let m=[];for(let y=0,_=f.length;y<_;y++){let x=f[y],T=new Mi;T.curves=x.curves,m.push(T)}return m}function i(f,m){let y=m.length,_=!1;for(let x=y-1,T=0;T<y;x=T++){let E=m[x],L=m[T],D=L.x-E.x,M=L.y-E.y;if(Math.abs(M)>2**-52){if(M<0&&(E=m[T],D=-D,L=m[x],M=-M),f.y<E.y||f.y>L.y)continue;if(f.y===E.y){if(f.x===E.x)return!0}else{let R=M*(f.x-E.x)-D*(f.y-E.y);if(R===0)return!0;if(R<0)continue;_=!_}}else{if(f.y!==E.y)continue;if(L.x<=f.x&&f.x<=E.x||E.x<=f.x&&f.x<=L.x)return!0}}return _}let r=Si.isClockWise,a=this.subPaths;if(a.length===0)return[];let s,n,o,l=[];if(a.length===1)return n=a[0],o=new Mi,o.curves=n.curves,l.push(o),l;let h=!r(a[0].getPoints());h=e?!h:h;let c=[],u=[],d=[],p=0,g;u[p]=void 0,d[p]=[];for(let f=0,m=a.length;f<m;f++)n=a[f],g=n.getPoints(),s=r(g),s=e?!s:s,s?(!h&&u[p]&&p++,u[p]={s:new Mi,p:g},u[p].s.curves=n.curves,h&&p++,d[p]=[]):d[p].push({h:n,p:g[0]});if(!u[0])return t(a);if(u.length>1){let f=!1,m=0;for(let y=0,_=u.length;y<_;y++)c[y]=[];for(let y=0,_=u.length;y<_;y++){let x=d[y];for(let T=0;T<x.length;T++){let E=x[T],L=!0;for(let D=0;D<u.length;D++)i(E.p,u[D].p)&&(y!==D&&m++,L?(L=!1,c[D].push(E)):f=!0);L&&c[y].push(E)}}m>0&&f===!1&&(d=c)}let v;for(let f=0,m=u.length;f<m;f++){o=u[f].s,l.push(o),v=d[f];for(let y=0,_=v.length;y<_;y++)o.holes.push(v[y].h)}return l}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"158"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="158");export{ft as $,vt as A,wt as B,Hn as C,Ai as D,mt as E,Pr as F,yt as G,zo as H,_t as I,qt as J,Dn as K,di as L,co as M,Ke as N,xt as O,ea as P,As as Q,ts as R,bo as S,pi as T,Bo as U,Ri as V,Qi as W,oo as X,Mi as Y,Gt as Z,Qr as _,Zn as a,$e as at,vo as b,ca as c,vu as ct,Mo as d,lo as et,Wo as f,Un as g,ge as h,_h as i,w as it,ci as j,Ne as k,Hi as l,so as m,Qe as n,Br as nt,pe as o,kt as ot,za as p,Ie as q,ke as r,Z as rt,to as s,In as st,_r as t,er as tt,Pn as u,zi as v,xs as w,ki as x,ba as y,Wn as z};
