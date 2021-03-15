(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{538:function(s,n,a){s.exports=a.p+"assets/img/ebd4cf29-c54f-4d31-abda-1a175f5b35d4.ab3ce0d7.png"},539:function(s,n,a){s.exports=a.p+"assets/img/2d0930f4-1244-43e3-a7e4-e7e8ef2e2eb4.340ee347.png"},540:function(s,n,a){s.exports=a.p+"assets/img/005cf3fc-e366-4a43-9165-c5cbf0f1e48c.f781529f.png"},541:function(s,n,a){s.exports=a.p+"assets/img/c1331953-3cf1-4eac-845c-9f54da9c1628.18e4c70c.png"},637:function(s,n,a){"use strict";a.r(n);var e=a(18),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"可能用到的命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可能用到的命令"}},[s._v("#")]),s._v(" 可能用到的命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# sudo docker build -t nginx-docker-bj .\nsudo docker build -t neocloud-bj .\nsudo docker save neocloud-bj > neocloud-bj.tar\nsudo docker load < ./images/nginx.tar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),e("p",[e("strong",[s._v("方式一：【推荐】")])]),s._v(" "),e("p",[s._v("单独配置引用，docker-compose配置路径；")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("nginx:\n    depends_on:\n      - app\n    # image: nginx-docker-bj\n    image: nginx\n    ports:\n      - 8081:80\n    volumes:\n      - /srv/neocloud-bj/config/default.conf:/etc/nginx/conf.d/default.conf\n      - /srv/neocloud-bj/dist/client:/usr/share/nginx/html\n    restart: always\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("最后docker-compose.yml的配置：详见最后；")]),s._v(" "),e("p",[e("strong",[s._v("方式二：Dockerfile")])]),s._v(" "),e("p",[s._v("跟容器一起固定死；")]),s._v(" "),e("p",[s._v("docker-new项目；")]),s._v(" "),e("p",[s._v("Dockerfile文件内容：")]),s._v(" "),e("p",[s._v("Dockerfile")]),s._v(" "),e("p",[s._v("**方式一：**最后修改配置为：")]),s._v(" "),e("p",[e("img",{attrs:{src:a(538),alt:"img"}})]),s._v(" "),e("p",[s._v("1：要修改前端的项目时，直接替换dist/client中的即可；")]),s._v(" "),e("p",[s._v("2：要修改后端的项目时，")]),s._v(" "),e("p",[s._v("3：替换后重启docker-compose，或者直接.start.sh下；")]),s._v(" "),e("p",[e("strong",[s._v("方式二：最最后修改为，提供前端和后端tar就可以；其他基础的容器(mongo,redis他们自己安装处理)")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(539),alt:"img"}})]),s._v(" "),e("p",[e("strong",[s._v("方式三：通过阿里云子账户，打包成镜像修改为在线模式，提供北京第三方，直接让他们直接去下载；")])]),s._v(" "),e("p",[e("strong",[s._v("同时修改docker-compose,start.sh启动录取脚本；")])]),s._v(" "),e("p",[e("strong",[s._v("docker-compose.yml")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('version: \'2\'\nservices:\n  redis:\n    image: redis\n    volumes:\n      - /srv/neocloud-bj/redis:/data\n    restart: always\n  mongodb:\n    image: mongo:3.4\n    ports:\n      - "27018:27017"\n    volumes:\n      - /srv/neocloud-bj/mongodb:/data/db\n    restart: always\n  app:\n    depends_on:\n      - redis\n      - mongodb\n    # image: neocloud-bj，后面防止修改脚本，可以直接拉去一个:laste版本\n    image: registry.cn-beijing.aliyuncs.com/onyx/neocloud-bj:1.0.0\n    ports:\n      - "8080:8080"\n    volumes:\n      - /srv/neocloud-bj/uploads:/usr/src/app/uploads\n      - /srv/neocloud-bj/config/docker.js:/usr/src/app/server/config/environment/docker.js\n    restart: always\n  nginx:\n    depends_on:\n      - app\n    # image: neocloud-bj-fe, 后面防止修改脚本，可以直接拉去一个:laste版本\n    image: registry.cn-beijing.aliyuncs.com/onyx/neocloud-web-bj:1.0.0\n    ports:\n      - 8081:80\n    volumes:\n      - /srv/neocloud-bj/config/default.conf:/etc/nginx/conf.d/default.conf\n    #   - /srv/neocloud-bj/dist/client:/usr/share/nginx/html\n    restart: always\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br")])]),e("p",[s._v("start.sh")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#!/bin/bash\n# sudo apt-get update\n# sudo apt-get install -y openssh-server\n# sudo dpkg -i ./soft/docker-ce_17.09.0-ce-0-ubuntu_amd64.deb\n# sudo dpkg -i ./soft/libltdl7_2.4.6-0.1_amd64.deb\n# sudo cp ./soft/docker-compose /usr/local/bin/docker-compose\n# sudo chmod +x /usr/local/bin/docker-compose\n# sudo docker load < ./images/neocloud-bj-fe.tar\n# sudo docker load < ./images/neocloud-bj.tar\nsudo mkdir -p /srv/neocloud-bj/config/\n#for client static\n# sudo cp -R ./dist  /srv/neocloud-bj/\nsudo cp ./config/default.conf /srv/neocloud-bj/config/default.conf\n#for neocloud-bj pro\nsudo cp ./config/docker.js /srv/neocloud-bj/config/docker.js\nsudo docker-compose rm -f\nsudo docker-compose up -d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("nginx配置：")]),s._v(" "),e("p",[s._v("default.conf")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("upstream app {\n  least_conn;\n  server app:8080;\n}\nserver {\n    listen       80;\n    server_name  localhost;\n    #charset koi8-r;\n    #access_log  /var/log/nginx/host.access.log  main;\n    location /api/ {\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection \"upgrade\";\n        proxy_http_version 1.1;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header Host $host;\n        proxy_pass http://app;\n    }\n    location / {\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n    proxy_read_timeout 150;\n    #    proxy_pass   http://localhost:8080;\n    #    proxy_set_header   Host    $host;\n    #    proxy_set_header   X-Real-IP   $remote_addr;\n    #    proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n    #error_page  404              /404.html;\n    # redirect server error pages to the static page /50x.html\n    #\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n    # proxy the PHP scripts to Apache listening on 127.0.0.1:80\n    #\n    #location ~ \\.php$ {\n    #    proxy_pass   http://127.0.0.1;\n    #}\n    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000\n    #\n    #location ~ \\.php$ {\n    #    root           html;\n    #    fastcgi_pass   127.0.0.1:9000;\n    #    fastcgi_index  index.php;\n    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\n    #    include        fastcgi_params;\n    #}\n    # deny access to .htaccess files, if Apache's document root\n    # concurs with nginx's one\n    #\n    #location ~ /\\.ht {\n    #    deny  all;\n    #}\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br")])]),e("p",[s._v("docker-compose.yml")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# sudo mkdir -p /srv/neocloud-bj/config/\n# sudo cp ./docker.js /srv/neocloud-bj/config/docker.js\n# sudo docker-compose rm -f\n# sudo docker-compose up -d\n# 以上命令操作，可以直接封装在start.sh文件，脚本处理；\nversion: \'2\'\nservices:\n  redis:\n    image: redis\n    volumes:\n      - /srv/neocloud-bj/redis:/data\n    restart: always\n  mongodb:\n    image: mongo:3.4\n    ports:\n      - "27018:27017"# 暴露出去方便管理查看数据；\n    volumes:\n      - /srv/neocloud-bj/mongodb:/data/db\n    restart: always\n  app:\n    depends_on:\n      - redis\n      - mongodb\n    image: neocloud-bj\n    ports:\n      - "8080:8080"# 接口调用地址；\n    volumes:\n      - /srv/neocloud-bj/uploads:/usr/src/app/uploads\n      - /srv/neocloud-bj/config/docker.js:/usr/src/app/server/config/environment/docker.js\n    restart: always\n  nginx:\n    depends_on:\n      - app\n    # image: nginx-docker-bj#第二种方式\n    image: nginx #第一种方式\n    ports:\n      - 8081:80 #默认访问前端项目地址；\n    volumes:\n      - /srv/neocloud-bj/config/default.conf:/etc/nginx/conf.d/default.conf\n      - /srv/neocloud-bj/dist/client:/usr/share/nginx/html\n    restart: always\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br")])]),e("p",[s._v("start.sh")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#!/bin/bash\n# sudo apt-get update\n# sudo apt-get install -y openssh-server\n# sudo dpkg -i ./docker_install/docker-ce_17.09.0-ce-0-ubuntu_amd64.deb\n# sudo dpkg -i ./docker_install/libltdl7_2.4.6-0.1_amd64.deb\n# sudo cp ./docker_install/docker-compose /usr/local/bin/docker-compose\n# sudo chmod +x /usr/local/bin/docker-compose\n#sudo docker load < ./images/neocloud-bj.tar\n#sudo docker load < ./images/mongo.tar\n#sudo docker load < ./images/pdfreactor.tar\n#sudo docker load < ./images/redis.tar\n#sudo docker load < ./images/nginx.tar\nsudo mkdir -p /srv/neocloud-bj/config/\n#for client static\nsudo cp -R ./dist  /srv/neocloud-bj/\n#for neocloud-bj pro\nsudo cp ./docker.js /srv/neocloud-bj/config/docker.js\nsudo cp ./default.conf /srv/neocloud-bj/config/default.conf\n#sudo tar zxvf config/fonts.tar.gz -C config/\n#sudo cp -R ./config/fonts  /srv/neocloud-bj/config/libreoffice/\n# sudo tar zxvf config/fonts.tar.gz -C /srv/neocloud-bj/config/libreoffice/\nsudo docker-compose rm -f\nsudo docker-compose up -d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("p",[s._v("最后的目录结构：")]),s._v(" "),e("p",[e("img",{attrs:{src:a(540),alt:"img"}})]),s._v(" "),e("hr"),s._v(" "),e("p",[e("strong",[s._v("最后就是数据同步问题：")])]),s._v(" "),e("p",[s._v("1：把srv目录中的数据一并打包放在压缩包里面；")]),s._v(" "),e("p",[s._v("2：为了不用修改原来的代码逻辑，设置一个默认的Admin账户，让前端默认一个admin用户登录处理；")]),s._v(" "),e("p",[s._v("在调用jd书城同步接口，把数据同步拉取下来数据；sync.sh")]),s._v(" "),e("p",[s._v("http://192.168.11.17:8080/api/books/syncJDBooks")]),s._v(" "),e("p",[e("img",{attrs:{src:a(541),alt:"img"}})]),s._v(" "),e("p",[s._v("最后，现在成sync.sh，触发脚本处理；")]),s._v(" "),e("p",[s._v("sync.sh")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#!/bin/bash\ncurl --request GET \\\n  --url http://192.168.11.17:8080/api/books/syncJDBooks \\\ncurl --request POST \\\n  --url http://192.168.11.17:8080/api/librarys/syncJDBook \\\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("hr"),s._v(" "),e("p",[s._v("README.md")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("### - Runing \n- 修改config/docker.js中的配置, 把 ```host: 'http://ip:8080/',``` 修改为当前服务器的ip ;\n- 启动后，再同步书城数据；启动如下：\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("  ./start.sh\n  ./sync.sh\n")])])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("### 书城jd账户批量导入接口\n- 文件导入格式详见sample目录下模板示例；\n- 请求导入；\neg:\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("curl --request POST "),e("br"),s._v("\n--url http://ip:8080/api/thirdPartyAccounts/batchImport "),e("br"),s._v("\n--header 'Cache-Control: no-cache' "),e("br"),s._v("\n--header 'Postman-Token: 31f9c206-1691-4f8e-ae84-f60c376c7c9f' "),e("br"),s._v("\n--header 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' "),e("br"),s._v("\n--form file=@/home/xxxx/sample/sample.xlsx")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code")]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"})])])}),[],!1,null,null,null);n.default=r.exports}}]);