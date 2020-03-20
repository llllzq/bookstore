<template>
    <div>
        <!-- 导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>教育书籍</el-breadcrumb-item>
          </el-breadcrumb>
        <!-- 布局 -->
        <el-row >
            <el-col :span="9">
                <!-- 搜索框 -->
                <el-input placeholder="请输入内容">
                <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <!-- 卡片视图区 -->
        <el-row>
            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <img src="../../pic/books/3.jpg" class="image">
                <div style="padding: 14px;">
                  <span>小说1</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">加入购物车</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
    </div>
</template>
